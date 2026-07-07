import type { BusLine } from "@/types/transportation";

interface BusLineSelectorProps {
  lines: BusLine[];
  activeLineId: string;
  onSelect: (lineId: string) => void;
}

export function BusLineSelector({ lines, activeLineId, onSelect }: BusLineSelectorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-container-margin pb-stack-sm">
      {lines.map((line) => (
        <button
          key={line.id}
          type="button"
          onClick={() => onSelect(line.id)}
          className={`scale-98 whitespace-nowrap rounded-full px-4 py-1.5 font-label-sm text-label-sm shadow-sm transition-transform ${
            activeLineId === line.id
              ? "border border-primary-container/20 bg-primary-container text-on-primary-container"
              : "border border-outline-variant/30 bg-surface text-on-surface"
          }`}
        >
          {line.lineNumber}
        </button>
      ))}
    </div>
  );
}
