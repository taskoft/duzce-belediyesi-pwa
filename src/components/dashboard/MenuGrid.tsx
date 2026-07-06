import { Link } from "react-router-dom";
import { Icon } from "@/components/common/Icon";
import type { MenuItem } from "@/types/dashboard";

const MENU_ITEMS: MenuItem[] = [
  { id: "belediye", label: "Belediye", icon: "account_balance", path: "/belediye" },
  { id: "e-belediye", label: "E-Belediye", icon: "laptop_mac", path: "/e-belediye" },
  { id: "kent-rehberi", label: "Kent Rehberi", icon: "map", path: "/kent-rehberi" },
  { id: "projeler", label: "Projeler", icon: "architecture", path: "/projeler" },
  { id: "ulasim", label: "Ulaşım", icon: "directions_bus", path: "/ulasim" },
  { id: "sosyal-hizmetler", label: "Sosyal Hizmetler", icon: "volunteer_activism", path: "/sosyal-hizmetler" },
];

export function MenuGrid() {
  return (
    <section>
      <h3 className="font-label-lg text-label-lg mb-stack-sm pl-1 uppercase tracking-wider text-on-surface-variant">
        Hızlı Erişim
      </h3>
      <div className="grid grid-cols-2 gap-gutter">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="scale-98 flex flex-col items-start gap-2 rounded-xl border border-transparent bg-surface p-stack-md shadow-sm transition-shadow hover:border-outline-variant/30 hover:shadow-md active:bg-surface-container-low"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-fixed text-primary">
              <Icon name={item.icon} filled />
            </div>
            <span className="font-label-lg text-label-lg text-on-surface">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
