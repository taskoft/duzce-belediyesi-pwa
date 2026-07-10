import { Icon } from "@/components/common/Icon";
import { useOnboarding } from "@/hooks/useOnboarding";

export function OnboardingReplayButton() {
  const { restart } = useOnboarding();

  return (
    <button
      type="button"
      onClick={restart}
      className="flex h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-outline-variant font-label-lg text-label-lg text-on-surface transition-colors hover:bg-surface-container-low"
    >
      <Icon name="tour" className="text-[20px]" />
      Tanıtımı Göster
    </button>
  );
}
