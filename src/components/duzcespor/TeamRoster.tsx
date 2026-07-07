import type { Player, PlayerPosition } from "@/types/duzcespor";

interface TeamRosterProps {
  players: Player[];
}

const POSITION_ORDER: PlayerPosition[] = ["Kaleci", "Defans", "Orta Saha", "Forvet"];

export function TeamRoster({ players }: TeamRosterProps) {
  return (
    <div className="flex flex-col gap-stack-md">
      <span className="font-label-lg text-label-lg font-semibold text-on-surface">Kadro</span>
      {POSITION_ORDER.map((position) => {
        const positionPlayers = players.filter((player) => player.position === position);
        if (positionPlayers.length === 0) {
          return null;
        }

        return (
          <div key={position} className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">{position}</span>
            <div className="flex flex-col gap-1">
              {positionPlayers.map((player) => (
                <div key={player.id} className="flex items-center gap-3 rounded-xl bg-background-subtle p-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#DC2626]/10 font-label-lg text-label-lg font-bold text-[#DC2626]">
                    {player.number}
                  </span>
                  <span className="font-label-lg text-label-lg text-on-surface">{player.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
