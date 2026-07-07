import { Icon } from "@/components/common/Icon";
import type { QuickPaymentLink } from "@/types/ebelediye";

interface QuickPaymentLinksProps {
  links: QuickPaymentLink[];
}

export function QuickPaymentLinks({ links }: QuickPaymentLinksProps) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface">Sık Kullanılan Ödemeler</h3>
      <div className="grid grid-cols-3 gap-3">
        {links.map((link) => (
          <a
            key={link.id}
            href={`tel:${link.phone}`}
            className="scale-98 flex flex-col items-center gap-2 rounded-2xl bg-surface p-3 text-center shadow-sm transition-transform"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container/20 text-primary">
              <Icon name={link.icon} filled />
            </div>
            <span className="font-label-sm text-label-sm leading-tight text-on-surface">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
