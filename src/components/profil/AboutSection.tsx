import { IconBadge } from "@/components/common/IconBadge";

const APP_VERSION = "1.0.0";

export function AboutSection() {
  return (
    <section className="flex flex-col gap-2 rounded-2xl bg-surface p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <IconBadge name="info" tone="sky" />
        <div>
          <p className="font-label-lg text-label-lg text-on-surface">Düzce Belediyesi Mobil Uygulaması</p>
          <p className="font-label-sm text-label-sm text-outline">Sürüm {APP_VERSION}</p>
        </div>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Bu uygulama, Düzce Belediyesi hizmetlerine hızlı ve güvenli erişim sağlamak amacıyla geliştirilmiştir.
      </p>
    </section>
  );
}
