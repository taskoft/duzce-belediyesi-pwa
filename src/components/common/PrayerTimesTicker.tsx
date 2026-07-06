import { Icon } from "@/components/common/Icon";
import { usePrayerTimes } from "@/hooks/usePrayerTimes";

const PRAYER_LABELS: { key: "Fajr" | "Sunrise" | "Dhuhr" | "Asr" | "Maghrib" | "Isha"; label: string }[] = [
  { key: "Fajr", label: "İmsak" },
  { key: "Sunrise", label: "Güneş" },
  { key: "Dhuhr", label: "Öğle" },
  { key: "Asr", label: "İkindi" },
  { key: "Maghrib", label: "Akşam" },
  { key: "Isha", label: "Yatsı" },
];

export function PrayerTimesTicker() {
  const { timings, isLoading } = usePrayerTimes();

  return (
    <div className="flex flex-col gap-2 border-t border-outline-variant/20 px-3 py-3">
      <div className="flex items-center gap-2">
        <Icon name="mosque" className="text-primary" />
        <span className="font-label-sm text-label-sm text-on-surface-variant">Düzce Namaz Vakitleri</span>
      </div>
      {isLoading ? (
        <p className="font-label-sm text-label-sm text-outline">Yükleniyor...</p>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {PRAYER_LABELS.map(({ key, label }) => (
            <div key={key} className="rounded-lg bg-surface-container-low px-2 py-1.5 text-center">
              <p className="font-label-sm text-[10px] text-on-surface-variant">{label}</p>
              <p className="font-label-lg text-label-sm text-on-surface">{timings[key]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
