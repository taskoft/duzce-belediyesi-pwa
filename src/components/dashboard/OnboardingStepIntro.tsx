import { Icon } from "@/components/common/Icon";

interface OnboardingStepIntroProps {
  icon: string;
  title: string;
  description: string;
}

export function OnboardingStepIntro({ icon, title, description }: OnboardingStepIntroProps) {
  return (
    <>
      <div className="relative mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/40">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/30 via-white/5 to-transparent"
        />
        <Icon name={icon} filled className="relative text-[40px]" />
      </div>
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-3 font-bold text-on-surface">{title}</h2>
      <p className="font-body-lg text-body-lg mb-8 px-2 text-on-surface-variant">{description}</p>
    </>
  );
}
