import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";
import { OnboardingStepIntro } from "@/components/dashboard/OnboardingStepIntro";
import { OnboardingVisionStep } from "@/components/dashboard/OnboardingVisionStep";
import { useOnboarding } from "@/hooks/useOnboarding";

const INTRO_STEPS = [
  {
    icon: "touch_app",
    title: "Şehriniz Cebinizde!",
    description: "E-Belediye ile işlemlerinizi saniyeler içinde halledin.",
  },
  {
    icon: "bolt",
    title: "Hızlı ve Güvenli Erişim",
    description:
      "E-Belediye modülüyle borçlarınızı sorgulayıp güvenle ödeyin, Akıllı Ulaşım modülüyle otobüs saatlerini ve ulaşım kartı bakiyenizi anında takip edin.",
  },
];

export function OnboardingOverlay() {
  const { isVisible, currentStep, totalSteps, goNext, skip } = useOnboarding();
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <>
      <div
        aria-hidden="true"
        className={`absolute inset-0 z-50 bg-ink-base/40 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 z-50 flex items-center justify-center px-container-margin transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex w-full max-w-[340px] flex-col items-center rounded-[24px] bg-surface p-stack-lg text-center shadow-lg">
          {currentStep < INTRO_STEPS.length ? (
            <OnboardingStepIntro {...INTRO_STEPS[currentStep]} />
          ) : (
            <OnboardingVisionStep />
          )}

          <div className="mb-8 flex gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentStep ? "bg-primary" : "bg-outline-variant"
                }`}
              />
            ))}
          </div>

          <div className="flex w-full gap-3">
            {!isLastStep && (
              <button
                type="button"
                onClick={skip}
                className="font-label-lg text-label-lg h-[56px] flex-1 rounded-xl text-on-surface-variant transition-colors hover:bg-surface-container-low"
              >
                Geç
              </button>
            )}
            <Button variant="primary" fullWidth={isLastStep} onClick={goNext} className={isLastStep ? "" : "flex-1"}>
              {isLastStep ? "Hemen Başla" : "İleri"}
              {!isLastStep && <Icon name="arrow_forward" className="text-[18px]" />}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
