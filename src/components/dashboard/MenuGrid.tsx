import { Link } from "react-router-dom";
import { IconBadge } from "@/components/common/IconBadge";
import { NAVIGATION_LINKS } from "@/data/navigationLinks";

const MENU_ITEM_IDS = ["belediye", "e-belediye", "kent-rehberi", "projeler", "ulasim", "sosyal-hizmetler"];

const MENU_ITEMS = MENU_ITEM_IDS.flatMap((id) => NAVIGATION_LINKS.filter((link) => link.id === id));

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
            <IconBadge name={item.icon} tone={item.tone} />

            <span className="font-label-lg text-label-lg text-on-surface">{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
