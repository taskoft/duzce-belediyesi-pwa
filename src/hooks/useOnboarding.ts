import { useCallback, useState } from "react";

const ONBOARDING_STORAGE_KEY = "duzce-pwa:onboarding-completed";
const TOTAL_STEPS = 3;

function hasCompletedOnboarding(): boolean {
  return window.localStorage.getItem(ONBOARDING_STORAGE_KEY) === "true";
}

export function useOnboarding() {
  const [isVisible, setIsVisible] = useState(() => !hasCompletedOnboarding());
  const [currentStep, setCurrentStep] = useState(0);

  const complete = useCallback(() => {
    window.localStorage.setItem(ONBOARDING_STORAGE_KEY, "true");
    setIsVisible(false);
  }, []);

  const goNext = useCallback(() => {
    setCurrentStep((prev) => {
      if (prev >= TOTAL_STEPS - 1) {
        complete();
        return prev;
      }
      return prev + 1;
    });
  }, [complete]);

  const skip = useCallback(() => {
    complete();
  }, [complete]);

  return {
    isVisible,
    currentStep,
    totalSteps: TOTAL_STEPS,
    goNext,
    skip,
    complete,
  };
}
