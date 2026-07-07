import { Icon } from "@/components/common/Icon";
import type { DutyScheduleEntry } from "@/types/eczane";

interface WeeklyDutyScheduleProps {
  schedule: DutyScheduleEntry[];
}

const DAYS_TR = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

export function WeeklyDutySchedule({ schedule }: WeeklyDutyScheduleProps) {
  const todayName = DAYS_TR[new Date().getDay()];

  return (
    <div className="mx-container-margin mb-stack-md flex flex-col gap-2 rounded-2xl bg-surface p-4 shadow-sm">
      <div className="mb-1 flex items-center gap-2">
        <Icon name="calendar_month" className="text-primary" />
        <h3 className="font-label-lg text-label-lg text-on-surface">Haftalık Nöbet Takvimi</h3>
      </div>
      {schedule.map((entry) => {
        const isToday = entry.day === todayName;
        return (
          <div
            key={entry.day}
            className={`flex items-center justify-between rounded-lg px-3 py-2 ${
              isToday ? "bg-primary-container/20" : ""
            }`}
          >
            <span
              className={`font-label-sm text-label-sm ${
                isToday ? "font-bold text-primary-container" : "text-on-surface-variant"
              }`}
            >
              {entry.day}
              {isToday && " (Bugün)"}
            </span>
            <span className="font-label-lg text-label-lg text-on-surface">{entry.pharmacyName}</span>
          </div>
        );
      })}
    </div>
  );
}
