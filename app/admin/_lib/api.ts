// Client-side wrapper for the Capyngen content API (blogs, careers, uploads).

export type Blog = {
  _id: string;
  title: string;
  author: string;
  description: string;
  content: string;
  image: string;
  tags: string[];
  category: string;
  group: string;
  date: string;
  metaTitle?: string;
  metaDescription?: string;
  schema?: unknown;
};

export type BlogInput = Omit<Blog, "_id">;

export type Career = {
  _id: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  description: string;
  requirements: string;
  applyLink: string;
};

export type CareerInput = Omit<Career, "_id">;

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export class ApiError extends Error {}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!BASE_URL) throw new ApiError("API is not configured. Set NEXT_PUBLIC_API_BASE_URL.");

  const headers: HeadersInit = { Accept: "application/json" };
  if (init.body && !(init.body instanceof FormData)) headers["Content-Type"] = "application/json";

  let response: Response;
  try {
    response = await fetch(`${BASE_URL}${path}`, { ...init, headers });
  } catch {
    throw new ApiError("Network error: could not reach the server.");
  }

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new ApiError(data?.message ?? data?.errors?.[0]?.msg ?? `Request failed (${response.status})`);
  }
  return data as T;
}

export function errorMessage(error: unknown) {
  return error instanceof Error && error.message ? error.message : "Something went wrong";
}

export const BlogService = {
  async list() {
    const data = await request<{ blogs?: Blog[] }>("/api/blogs");
    return data.blogs ?? [];
  },
  async create(payload: BlogInput) {
    const data = await request<{ blog: Blog }>("/api/blogs", { method: "POST", body: JSON.stringify(payload) });
    return data.blog;
  },
  async update(id: string, payload: BlogInput) {
    const data = await request<{ blog: Blog }>(`/api/blogs/${id}`, { method: "PUT", body: JSON.stringify(payload) });
    return data.blog;
  },
  async remove(id: string) {
    await request(`/api/blogs/${id}`, { method: "DELETE" });
  },
};

export const CareerService = {
  async list() {
    const data = await request<{ careers?: Career[] }>("/api/careers");
    return data.careers ?? [];
  },
  async create(payload: CareerInput) {
    const data = await request<{ career: Career }>("/api/careers", { method: "POST", body: JSON.stringify(payload) });
    return data.career;
  },
  async update(id: string, payload: CareerInput) {
    const data = await request<{ career: Career }>(`/api/careers/${id}`, { method: "PUT", body: JSON.stringify(payload) });
    return data.career;
  },
  async remove(id: string) {
    await request(`/api/careers/${id}`, { method: "DELETE" });
  },
};

/** Uploads an image to S3 through the API and returns its public URL. */
export async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("image", file);
  const data = await request<{ url?: string }>("/api/upload", { method: "POST", body: formData });
  if (!data.url) throw new ApiError("Upload finished but no image URL was returned.");
  return data.url;
}
