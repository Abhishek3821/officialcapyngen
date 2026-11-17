"use client";

import { useCallback, useEffect, useState } from "react";
import { errorMessage } from "../_lib/api";
import { useToast } from "./toast";

type Service<T, Input> = {
  list: () => Promise<T[]>;
  create: (payload: Input) => Promise<T>;
  update: (id: string, payload: Input) => Promise<T>;
  remove: (id: string) => Promise<void>;
};

/** Shared list/create/update/delete state for the blogs and careers screens. */
export function useCollection<T extends { _id: string }, Input>(service: Service<T, Input>, noun: string) {
  const { push } = useToast();
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [deletedCount, setDeletedCount] = useState(0);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      setItems(await service.list());
      setLoadError("");
    } catch (error) {
      setLoadError(errorMessage(error));
      push("error", errorMessage(error));
    } finally {
      setLoading(false);
    }
  }, [service, push]);

  useEffect(() => {
    // Initial fetch on mount; reload() owns its own loading/error state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void reload();
  }, [reload]);

  async function create(payload: Input) {
    try {
      const created = await service.create(payload);
      setItems((list) => [created, ...list]);
      push("success", `${noun} created successfully`);
      return true;
    } catch (error) {
      push("error", errorMessage(error));
      return false;
    }
  }

  async function update(id: string, payload: Input) {
    try {
      const updated = await service.update(id, payload);
      setItems((list) => list.map((item) => (item._id === id ? { ...item, ...updated } : item)));
      push("success", `${noun} updated successfully`);
      return true;
    } catch (error) {
      push("error", errorMessage(error));
      return false;
    }
  }

  async function remove(id: string) {
    try {
      await service.remove(id);
      setItems((list) => list.filter((item) => item._id !== id));
      setDeletedCount((count) => count + 1);
      push("success", `${noun} deleted successfully`);
    } catch (error) {
      push("error", errorMessage(error));
    }
  }

  return { items, loading, loadError, deletedCount, reload, create, update, remove, push };
}
