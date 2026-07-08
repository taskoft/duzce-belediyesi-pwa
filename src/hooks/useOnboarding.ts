import { useUIContext } from "@/hooks/useUIContext";

export function useOnboarding() {
  const { onboarding, onboardingTotalSteps, goToNextOnboardingStep, skipOnboarding, restartOnboarding } =
    useUIContext();

  return {
    isVisible: onboarding.isVisible,
    currentStep: onboarding.currentStep,
    totalSteps: onboardingTotalSteps,
    goNext: goToNextOnboardingStep,
    skip: skipOnboarding,
    restart: restartOnboarding,
  };
}
