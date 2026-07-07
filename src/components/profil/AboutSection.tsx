import { Icon } from "@/components/common/Icon";

const APP_VERSION = "1.0.0";

export function AboutSection() {
  return (
    <section className="flex flex-col gap-2 rounded-2xl bg-surface p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/20 text-primary">
          <Icon name="info" filled />
        </div>
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
