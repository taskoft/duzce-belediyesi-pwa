import { Icon } from "@/components/common/Icon";
import { IconBadge, type IconTone } from "@/components/common/IconBadge";
import type { AssemblyPoint, EmergencyHotline } from "@/types/acilDurum";

interface EmergencyHotlinesProps {
  hotlines: EmergencyHotline[];
  nearestPoint?: AssemblyPoint;
}

const HOTLINE_META: Record<string, { icon: string; tone: IconTone }> = {
  "110": { icon: "local_fire_department", tone: "orange" },
  "153": { icon: "support_agent", tone: "cyan" },
  "122": { icon: "crisis_alert", tone: "amber" },
  "su-ariza": { icon: "water_drop", tone: "sky" },
  "183": { icon: "diversity_1", tone: "purple" },
};

export function EmergencyHotlines({ hotlines, nearestPoint }: EmergencyHotlinesProps) {
  const [primary, ...rest] = hotlines;

  return (
    <div className="absolute inset-x-container-margin bottom-4 z-40 flex flex-col overflow-hidden rounded-[24px] border border-outline-variant/10 bg-surface/95 shadow-md backdrop-blur-xl">
      <div className="flex flex-col items-center justify-center pb-2 pt-3">
        <div className="mb-3 h-1.5 w-12 rounded-full bg-outline-variant/40" />
        <h2 className="font-headline-md text-headline-md flex items-center gap-2 text-on-surface">
          <Icon name="warning" filled className="text-error-vibrant" />
          Acil Durum Rehberi
        </h2>
        <p className="font-body-md text-body-md mt-1 px-4 text-center text-outline">
          Yardıma ihtiyacınız olduğunda hemen arayın.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 p-4">
        {primary && (
          <a
            href={`tel:${primary.phone}`}
            className="scale-98 flex items-center rounded-2xl border border-error/20 bg-error/10 p-4 transition-all"
          >
            <IconBadge name="local_hospital" tone="red" size="lg" />
            <div className="ml-4 flex-1">
              <h3 className="font-label-lg text-label-lg text-error">{primary.label}</h3>
              {primary.sublabel && <p className="font-label-sm text-label-sm text-error/70">{primary.sublabel}</p>}
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-md shadow-green-500/30">
              <Icon name="call" filled />
            </div>
          </a>
        )}
        <div className="grid grid-cols-2 gap-3">
          {rest.map((hotline) => {
            const meta = HOTLINE_META[hotline.id] ?? { icon: "support_agent", tone: "blue" as IconTone };
            return (
              <a
                key={hotline.id}
                href={`tel:${hotline.phone}`}
                className="scale-98 flex flex-col items-center justify-center rounded-2xl border border-primary-container/20 bg-primary-container/10 p-3 text-center transition-all"
              >
                <IconBadge name={meta.icon} tone={meta.tone} className="mb-2" />
                <h3 className="font-label-sm text-label-sm leading-tight text-primary-container">{hotline.label}</h3>
              </a>
            );
          })}
        </div>
      </div>

      {nearestPoint && (
        <div className="mx-4 mb-4 flex items-start gap-3 rounded-xl border border-outline-variant/20 bg-surface-container-low p-3">
          <Icon name="info" filled className="mt-0.5 text-[20px] text-sky-500" />
          <p className="font-label-sm text-label-sm flex-1 leading-relaxed text-on-surface-variant">
            Şu anda bulunduğunuz konuma en yakın toplanma alanı <strong>{nearestPoint.name}</strong> (Yaklaşık{" "}
            {nearestPoint.distanceLabel}).
          </p>
        </div>
      )}
    </div>
  );
}
