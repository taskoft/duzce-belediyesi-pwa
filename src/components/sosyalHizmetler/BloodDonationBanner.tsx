import { Icon } from "@/components/common/Icon";

export function BloodDonationBanner() {
  return (
    <div className="flex items-center gap-4 rounded-2xl border-l-4 border-error-vibrant bg-error-container p-stack-md shadow-sm">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-error-vibrant/10">
        <Icon name="bloodtype" filled className="text-error-vibrant" />
      </div>
      <div className="flex-1">
        <h3 className="font-label-lg text-label-lg mb-1 text-on-error-container">Kan Bağışı Kampanyası</h3>
        <p className="font-body-sm text-body-sm text-on-error-container/80">
          Türk Kızılayı iş birliğiyle düzenlenen kan bağışı seferberliğine destek olun; bir bağış üç can kurtarabilir.
        </p>
        <a
          href="tel:1044"
          className="font-label-sm text-label-sm mt-2 inline-flex items-center gap-1 text-error-vibrant"
        >
          <Icon name="call" className="text-[16px]" />
          Kızılay Bağış Hattı: 1044
        </a>
      </div>
    </div>
  );
}
