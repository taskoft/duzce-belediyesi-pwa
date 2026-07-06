import type { StandingsRow } from "@/types/duzcespor";

interface StandingsTableProps {
  standings: StandingsRow[];
}

export function StandingsTable({ standings }: StandingsTableProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-label-lg text-label-lg font-semibold text-on-surface">Puan Durumu</span>
        <span className="font-label-sm text-label-sm text-primary">Tümünü Gör</span>
      </div>
      <div className="overflow-hidden rounded-xl border border-surface-container-low bg-background-subtle">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-surface-container-low bg-surface-container-low/50">
              <th className="font-label-sm text-label-sm w-12 px-3 py-2 text-center text-outline">Sıra</th>
              <th className="font-label-sm text-label-sm px-3 py-2 text-outline">Takım</th>
              <th className="font-label-sm text-label-sm w-12 px-3 py-2 text-right text-outline">P</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row) => (
              <tr
                key={row.team}
                className={
                  row.isHighlighted ? "border-b border-[#DC2626]/10 bg-[#DC2626]/5" : "border-b border-surface-container-low"
                }
              >
                <td
                  className={`font-body-md text-body-md px-3 py-2 text-center ${
                    row.isHighlighted ? "font-bold text-[#DC2626]" : "text-on-surface-variant"
                  }`}
                >
                  {row.position}
                </td>
                <td
                  className={`font-body-md text-body-md px-3 py-2 text-on-surface ${row.isHighlighted ? "font-bold" : ""}`}
                >
                  {row.team}
                </td>
                <td
                  className={`font-body-md text-body-md px-3 py-2 text-right font-semibold ${
                    row.isHighlighted ? "text-[#DC2626]" : "text-on-surface"
                  }`}
                >
                  {row.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
