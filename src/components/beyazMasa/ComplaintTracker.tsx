import { Icon } from "@/components/common/Icon";
import { IconBadge } from "@/components/common/IconBadge";
import { Button } from "@/components/common/Button";
import type { TrackedComplaint } from "@/types/beyazMasa";

interface ComplaintTrackerProps {
  trackingCode: string;
  onTrackingCodeChange: (value: string) => void;
  trackedResult: TrackedComplaint | null | undefined;
  onTrack: () => void;
}

export function ComplaintTracker({
  trackingCode,
  onTrackingCodeChange,
  trackedResult,
  onTrack,
}: ComplaintTrackerProps) {
  return (
    <section className="flex flex-col gap-stack-md rounded-2xl border border-surface-container-low bg-surface p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <IconBadge name="pin_drop" tone="rose" size="sm" />
        <h2 className="font-headline-md text-headline-md text-on-surface">Başvuru Sorgula</h2>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={trackingCode}
          onChange={(event) => onTrackingCodeChange(event.target.value)}
          placeholder="Örn. DX-2026"
          className="font-body-lg text-body-lg h-component-height-md flex-1 rounded-xl border border-outline-variant bg-background-subtle px-4 text-on-surface transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <Button variant="primary" size="md" onClick={onTrack} aria-label="Sorgula">
          <Icon name="search" />
        </Button>
      </div>

      {trackedResult === null && (
        <p className="font-body-md text-body-md text-on-surface-variant">Bu koda ait bir başvuru bulunamadı.</p>
      )}

      {trackedResult && (
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-label-lg text-label-lg text-on-surface">#{trackedResult.code}</p>
            <p className="font-body-md text-body-md text-on-surface-variant">{trackedResult.summary}</p>
          </div>
          <div className="flex items-center">
            {trackedResult.steps.map((step, index) => {
              const stepNumber = index + 1;
              const isDone = stepNumber <= trackedResult.currentStep;
              return (
                <div key={step} className="flex flex-1 flex-col items-center gap-1 last:flex-none">
                  <div className="flex w-full items-center">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-label-sm text-label-sm ${
                        isDone ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant"
                      }`}
                    >
                      {isDone ? <Icon name="check" className="text-[16px]" /> : stepNumber}
                    </div>
                    {index < trackedResult.steps.length - 1 && (
                      <div
                        className={`h-1 flex-1 ${
                          stepNumber < trackedResult.currentStep ? "bg-primary" : "bg-surface-container-high"
                        }`}
                      />
                    )}
                  </div>
                  <span className="font-label-sm text-label-sm text-center text-on-surface-variant">{step}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
