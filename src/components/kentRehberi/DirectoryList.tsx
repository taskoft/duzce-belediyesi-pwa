import { Icon } from "@/components/common/Icon";
import type { DirectoryEntry, EmergencyNumber } from "@/types/cityGuide";

interface DirectoryListProps {
  emergencyNumbers: EmergencyNumber[];
  entries: DirectoryEntry[];
}

export function DirectoryList({ emergencyNumbers, entries }: DirectoryListProps) {
  return (
    <div className="flex flex-col gap-stack-sm">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {emergencyNumbers.map((emergency) => (
          <a
            key={emergency.id}
            href={`tel:${emergency.phone}`}
            className="scale-98 flex shrink-0 items-center gap-2 rounded-full bg-error-container px-3 py-2 text-on-error-container transition-transform"
          >
            <Icon name="emergency" filled className="text-[16px]" />
            <span className="font-label-sm text-label-sm whitespace-nowrap">{emergency.label}</span>
          </a>
        ))}
      </div>

      {entries.map((entry) => (
        <div
          key={entry.id}
          className="flex items-center gap-4 rounded-2xl bg-surface p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container/20 text-primary">
            <Icon name={entry.icon} filled />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-label-lg text-label-lg truncate text-on-surface">{entry.title}</h3>
            <p className="font-body-md text-body-md mt-1 text-on-surface-variant">{entry.phone}</p>
          </div>
          <a
            href={`tel:${entry.phone}`}
            aria-label={`${entry.title} ara`}
            className="scale-98 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-sm transition-transform"
          >
            <Icon name="call" className="text-[20px]" />
          </a>
        </div>
      ))}
    </div>
  );
}
