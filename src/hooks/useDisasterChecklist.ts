import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "duzce-pwa:disaster-checklist";

function readCheckedItems(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function useDisasterChecklist() {
  const [checkedIds, setCheckedIds] = useState<string[]>(() => readCheckedItems());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
  }, [checkedIds]);

  const isChecked = useCallback((id: string) => checkedIds.includes(id), [checkedIds]);

  const toggleItem = useCallback((id: string) => {
    setCheckedIds((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]));
  }, []);

  return { checkedIds, isChecked, toggleItem };
}
