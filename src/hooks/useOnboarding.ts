import { useCallback, useState } from "react";

const ONBOARDING_STORAGE_KEY = "duzce-pwa:onboarding-completed";

function hasCompletedOnboarding(): boolean {
  return window.localStorage.getItem(ONBOARDING_STORAGE_KEY) === "true";
}

export function useOnboarding() {
  const [isVisible, setIsVisible] = useState(() => !hasCompletedOnboarding());

  const complete = useCallback(() => {
    window.localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
    setIsVisible(false);
  }, []);

  return { isVisible, complete };
}
