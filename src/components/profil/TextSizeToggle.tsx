import { IconBadge } from "@/components/common/IconBadge";
import { useTextScale } from "@/hooks/useTextScale";

export function TextSizeToggle() {
  const { isLargeText, toggleTextScale } = useTextScale();

  return (
    <section className="flex flex-col gap-stack-sm">
      <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">
        Erişilebilirlik
      </h3>
      <div className="flex items-center justify-between rounded-2xl bg-surface p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <IconBadge name="format_size" tone="violet" size="sm" />
          <div>
            <p className="font-body-md text-body-md text-on-surface">Büyük Yazı Boyutu</p>
            <p className="font-label-sm text-label-sm text-outline">Uygulama genelinde metinleri büyütür</p>
          </div>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={isLargeText}
          aria-label="Büyük Yazı Boyutu"
          onClick={toggleTextScale}
          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
            isLargeText ? "bg-primary" : "bg-surface-container-high"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
              isLargeText ? "translate-x-[22px]" : "translate-x-0.5"
            }`}
          />
        </button>
      </div>
    </section>
  );
}
