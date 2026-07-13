import { NavLink } from "react-router-dom";
import { Icon } from "@/components/common/Icon";
import { ICON_TONE_CLASSES } from "@/components/common/IconBadge";
import { NAVIGATION_LINKS } from "@/data/navigationLinks";
import type { MenuItem } from "@/types/dashboard";

function findNavLink(id: string): MenuItem {
  const link = NAVIGATION_LINKS.find((navLink) => navLink.id === id);
  if (!link) {
    throw new Error(`Navigation link not found: ${id}`);
  }
  return link;
}

const LEADING_NAV_ITEMS = [findNavLink("duzcespor"), findNavLink("eczane")];
const TRAILING_NAV_ITEMS = [findNavLink("beyaz-masa"), findNavLink("profil")];

function SideNavLink({ item }: { item: MenuItem }) {
  if (item.image) {
    return (
      <NavLink
        to={item.path}
        aria-label={item.id}
        className={({ isActive }) =>
          `flex h-14 w-14 items-center justify-center rounded-full transition-all duration-150 ${
            isActive ? "bg-surface-container-highest" : "opacity-50 grayscale hover:bg-surface-container-highest"
          }`
        }
      >
        <img src={item.image} alt="" aria-hidden="true" className="h-9 w-9 rounded-full object-cover" />
      </NavLink>
    );
  }

  return (
    <NavLink
      to={item.path}
      aria-label={item.id}
      className={({ isActive }) =>
        `flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-150 ${
          isActive
            ? `${ICON_TONE_CLASSES[item.tone]} text-white shadow-md`
            : "text-on-surface-variant/40 hover:bg-surface-container-highest"
        }`
      }
    >
      {({ isActive }) => <Icon name={item.icon} filled={isActive} className="text-[28px]" />}
    </NavLink>
  );
}

export function BottomNav() {
  return (
    <nav className="absolute bottom-0 z-40 w-full pb-safe">
      <div className="relative flex h-component-height-lg items-center justify-around border-t border-outline-variant/20 bg-surface/90 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] backdrop-blur-md dark:bg-inverse-surface/90">
        {LEADING_NAV_ITEMS.map((item) => (
          <SideNavLink key={item.id} item={item} />
        ))}

        <NavLink to="/" end aria-label="Ana Sayfa" className="-mt-7">
          {({ isActive }) => (
            <span
              className={`scale-98 flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface shadow-lg transition-colors duration-150 dark:border-inverse-surface ${
                isActive ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant"
              }`}
            >
              <Icon name="home" filled={isActive} className="text-[30px]" />
            </span>
          )}
        </NavLink>

        {TRAILING_NAV_ITEMS.map((item) => (
          <SideNavLink key={item.id} item={item} />
        ))}
      </div>
    </nav>
  );
}
