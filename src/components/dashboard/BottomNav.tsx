import { NavLink } from "react-router-dom";
import { Icon } from "@/components/common/Icon";
import { useOnboarding } from "@/hooks/useOnboarding";

interface BottomNavItem {
  id: string;
  icon: string;
  path: string;
}

const LEADING_NAV_ITEMS: BottomNavItem[] = [
  { id: "duzcespor", icon: "sports_soccer", path: "/duzcespor" },
  { id: "eczane", icon: "medical_services", path: "/eczane" },
];

const TRAILING_NAV_ITEMS: BottomNavItem[] = [
  { id: "beyaz-masa", icon: "support_agent", path: "/beyaz-masa" },
  { id: "profil", icon: "person", path: "/profil" },
];

function SideNavLink({ item }: { item: BottomNavItem }) {
  return (
    <NavLink
      to={item.path}
      aria-label={item.id}
      className={({ isActive }) =>
        `flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-150 hover:bg-surface-container-highest ${
          isActive ? "text-primary dark:text-primary-fixed" : "text-on-surface-variant/40"
        }`
      }
    >
      {({ isActive }) => <Icon name={item.icon} filled={isActive} />}
    </NavLink>
  );
}

function OnboardingTriggerButton() {
  const { restart } = useOnboarding();

  return (
    <button
      type="button"
      onClick={restart}
      aria-label="Tanıtımı Göster"
      className="flex h-12 w-12 items-center justify-center rounded-full text-on-surface-variant/40 transition-colors duration-150 hover:bg-surface-container-highest"
    >
      <Icon name="tour" />
    </button>
  );
}

export function BottomNav() {
  return (
    <nav className="absolute bottom-0 z-40 w-full pb-safe">
      <div className="relative flex h-component-height-lg items-center justify-around border-t border-outline-variant/20 bg-surface/90 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] backdrop-blur-md dark:bg-inverse-surface/90">
        <OnboardingTriggerButton />
        {LEADING_NAV_ITEMS.map((item) => (
          <SideNavLink key={item.id} item={item} />
        ))}

        <NavLink to="/" end aria-label="Ana Sayfa" className="-mt-7">
          {({ isActive }) => (
            <span
              className={`scale-98 flex h-14 w-14 items-center justify-center rounded-full border-4 border-surface shadow-lg transition-colors duration-150 dark:border-inverse-surface ${
                isActive ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface-variant"
              }`}
            >
              <Icon name="home" filled={isActive} className="text-[26px]" />
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
