import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@/components/common/Icon";
import { PrayerTimesTicker } from "@/components/common/PrayerTimesTicker";
import { ExchangeRateTicker } from "@/components/common/ExchangeRateTicker";
import { LegalInfoModal } from "@/components/common/LegalInfoModal";
import { useSidebar } from "@/hooks/useSidebar";
import { useModal } from "@/hooks/useModal";
import { NAVIGATION_LINKS } from "@/data/navigationLinks";
import { PRIVACY_POLICY_TEXT, TERMS_OF_USE_TEXT } from "@/data/legalContent";
import logoEmblem from "@/assets/logo-emblem.png";

export function Sidebar() {
  const { isOpen, close } = useSidebar();
  const { open: openModal, close: closeModal } = useModal();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const openPrivacyPolicy = () => {
    close();
    openModal(<LegalInfoModal title="Gizlilik Politikası" content={PRIVACY_POLICY_TEXT} onClose={closeModal} />);
  };

  const openTermsOfUse = () => {
    close();
    openModal(<LegalInfoModal title="Kullanım Şartları" content={TERMS_OF_USE_TEXT} onClose={closeModal} />);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return (
    <>
      <div
        onClick={close}
        aria-hidden="true"
        className={`absolute inset-0 z-50 bg-ink-base/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <nav
        aria-label="Ana gezinme menüsü"
        aria-hidden={!isOpen}
        className={`absolute inset-y-0 left-0 z-50 flex w-[280px] flex-col bg-surface shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "pointer-events-none -translate-x-full"
        }`}
      >
        <div className="flex h-component-height-lg items-center justify-between gap-3 border-b border-outline-variant/20 px-container-margin">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-fixed p-1.5">
              <img src={logoEmblem} alt="Düzce Belediyesi" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-on-surface">Düzce Belediyesi</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Mobil Uygulama</p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Menüyü kapat"
            className="rounded-full p-1 text-on-surface-variant hover:bg-surface-container-low"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {NAVIGATION_LINKS.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              end={link.path === "/"}
              onClick={close}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 font-label-lg text-label-lg transition-colors ${
                  isActive
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface hover:bg-surface-container-low"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isActive ? "bg-surface/20 text-on-primary-container" : `${link.accentBg} ${link.accentColor}`
                    }`}
                  >
                    <Icon name={link.icon} filled={isActive} className="text-[20px]" />
                  </span>
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex shrink-0 items-center justify-center gap-4 border-t border-outline-variant/20 px-3 py-3">
          <button
            type="button"
            onClick={openPrivacyPolicy}
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary"
          >
            Gizlilik Politikası
          </button>
          <button
            type="button"
            onClick={openTermsOfUse}
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary"
          >
            Kullanım Şartları
          </button>
        </div>

        <div className="shrink-0 overflow-y-auto pb-safe">
          <PrayerTimesTicker />
          <ExchangeRateTicker />
        </div>
      </nav>
    </>
  );
}
