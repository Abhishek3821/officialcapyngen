// Content for /our-products, taken from the original capyngen.com "Our Products" page.

export const ORINITE_URL = "https://orinite.com";

export type ProductKey = "hrms" | "crm" | "bm";

export const products: {
  key: ProductKey;
  number: string;
  name: string;
  tagline: string;
  short: string;
  paragraphs: string[];
  focus: string[];
  accent: { text: string; soft: string; solid: string; ring: string };
}[] = [
  {
    key: "hrms",
    number: "01",
    name: "Orinite HRMS",
    tagline: "Human Resource Management System",
    short: "Employees & HR",
    paragraphs: [
      "Managing employees and HR activities is an important part of every organisation. Orinite HRMS is designed to help businesses organise their human resource operations through a centralised digital platform.",
      "It supports businesses in managing employee-related information and HR processes in a more structured way. By bringing workforce management activities into a digital environment, Orinite HRMS helps organisations reduce manual administration and improve the overall management of HR operations.",
    ],
    focus: ["Employee information management", "Human resource administration", "Workforce management processes", "Organised HR operations", "Digital employee management"],
    accent: { text: "text-[#0f9f8f]", soft: "bg-[#e3f7f3]", solid: "bg-[#14b8a6]", ring: "ring-[#14b8a6]/30" },
  },
  {
    key: "crm",
    number: "02",
    name: "Orinite CRM",
    tagline: "Customer Relationship Management Platform",
    short: "Customers & Sales",
    paragraphs: [
      "Building and maintaining customer relationships is essential for business growth. Orinite CRM is designed to help businesses organise customer information, manage interactions, and maintain better visibility into their sales activities.",
      "The platform supports a structured approach to customer relationship management, helping teams handle customer-related information and business interactions more effectively.",
    ],
    focus: ["Customer information management", "Customer interaction tracking", "Sales activity organisation", "Customer relationship management", "Improved visibility into customer-related processes"],
    accent: { text: "text-[#4f46e5]", soft: "bg-[#ebeafe]", solid: "bg-[#6366f1]", ring: "ring-[#6366f1]/30" },
  },
  {
    key: "bm",
    number: "03",
    name: "Orinite Business Management",
    tagline: "Integrated Business Management Solutions",
    short: "Operations & Workflows",
    paragraphs: [
      "Orinite Business Management focuses on helping organisations manage different business activities through integrated digital solutions. It is designed to support businesses looking for a more organised way to handle their day-to-day operational requirements.",
      "By bringing relevant business processes into a digital environment, these solutions aim to support better coordination, improve workflow management, and make business information easier to organise.",
    ],
    focus: ["Day-to-day business operations", "Organised business workflows", "Operational process management", "Business information management", "Digital business administration"],
    accent: { text: "text-[#c2410c]", soft: "bg-[#fff0e6]", solid: "bg-[#f97316]", ring: "ring-[#f97316]/30" },
  },
];

export const reasons = [
  { title: "Business-Focused Solutions", text: "Designed around common workforce, customer, and operational management needs.", icon: "target" },
  { title: "Digital Process Management", text: "Supports organisations in moving from manual processes to structured digital workflows.", icon: "flow" },
  { title: "Integrated Product Approach", text: "Offers HRMS, CRM, and business management solutions under one product brand.", icon: "layers" },
  { title: "Continuous Development", text: "Focuses on improving technology and product capabilities as business requirements evolve.", icon: "refresh" },
  { title: "Business Efficiency", text: "Aims to help organisations manage information and daily activities more effectively.", icon: "bolt" },
] as const;

export const productFacts = [
  { label: "Product Brand", value: "Orinite" },
  { label: "Legal Owner and Operator", value: "Capyngen Private Limited" },
  { label: "Product Category", value: "Business Management & HRMS SaaS Platform" },
  { label: "Official Product Website", value: "orinite.com", href: ORINITE_URL },
];
