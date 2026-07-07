import { Icon } from "@/components/common/Icon";

interface OnboardingStepIntroProps {
  icon: string;
  title: string;
  description: string;
}

export function OnboardingStepIntro({ icon, title, description }: OnboardingStepIntroProps) {
  return (
    <>
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed">
        <Icon name={icon} filled className="text-[40px] text-primary" />
      </div>
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-3 font-bold text-on-surface">{title}</h2>
      <p className="font-body-lg text-body-lg mb-8 px-2 text-on-surface-variant">{description}</p>
    </>
  );
}
