import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "duzce-pwa:notification-preferences";

const DEFAULT_PREFERENCES: Record<string, boolean> = {
  kampanya: true,
  fatura: true,
  acilDurum: true,
  etkinlik: false,
};

function readPreferences(): Record<string, boolean> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...DEFAULT_PREFERENCES, ...(JSON.parse(raw) as Record<string, boolean>) } : DEFAULT_PREFERENCES;
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export function useNotificationPreferences() {
  const [preferences, setPreferences] = useState<Record<string, boolean>>(() => readPreferences());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  const toggle = useCallback((id: string) => {
    setPreferences((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  return { preferences, toggle };
}
