import { useNotificationPreferences } from "@/hooks/useNotificationPreferences";

const PREFERENCE_ITEMS = [
  { id: "kampanya", label: "Kampanya ve Duyuru Bildirimleri" },
  { id: "fatura", label: "Fatura Hatırlatmaları" },
  { id: "acilDurum", label: "Acil Durum Uyarıları" },
  { id: "etkinlik", label: "Etkinlik Bildirimleri" },
];

export function NotificationPreferences() {
  const { preferences, toggle } = useNotificationPreferences();

  return (
    <section className="flex flex-col gap-stack-sm">
      <h3 className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface-variant">
        Bildirim Tercihleri
      </h3>
      <div className="flex flex-col rounded-2xl bg-surface shadow-sm">
        {PREFERENCE_ITEMS.map((item, index) => {
          const isOn = preferences[item.id] ?? false;
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between p-4 ${
                index < PREFERENCE_ITEMS.length - 1 ? "border-b border-outline-variant/20" : ""
              }`}
            >
              <span className="font-body-md text-body-md text-on-surface">{item.label}</span>
              <button
                type="button"
                role="switch"
                aria-checked={isOn}
                aria-label={item.label}
                onClick={() => toggle(item.id)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                  isOn ? "bg-primary" : "bg-surface-container-high"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                    isOn ? "translate-x-[22px]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
