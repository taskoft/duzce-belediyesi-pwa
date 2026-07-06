import { useEffect } from "react";
import { Icon } from "@/components/common/Icon";
import { Button } from "@/components/common/Button";
import { useModal } from "@/hooks/useModal";
import { useOnboarding } from "@/hooks/useOnboarding";

export function OnboardingOverlay() {
  const { isVisible, complete } = useOnboarding();
  const { open, close } = useModal();

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    open(
      <>
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed">
          <Icon name="touch_app" filled className="text-[40px] text-primary" />
        </div>
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile mb-3 font-bold text-on-surface">
          Şehriniz Cebinizde!
        </h2>
        <p className="font-body-lg text-body-lg mb-8 px-2 text-on-surface-variant">
          E-Belediye ile işlemlerinizi saniyeler içinde halledin.
        </p>
        <div className="mb-8 flex gap-2">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <div className="h-2 w-2 rounded-full bg-outline-variant" />
          <div className="h-2 w-2 rounded-full bg-outline-variant" />
        </div>
        <Button
          variant="primary"
          fullWidth
          onClick={() => {
            complete();
            close();
          }}
        >
          Hemen Başla
        </Button>
      </>,
    );
  }, [isVisible]);

  return null;
}
