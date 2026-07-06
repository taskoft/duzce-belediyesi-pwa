import { useEffect, useState } from "react";
import { Icon } from "@/components/common/Icon";
import type { MatchHistoryEntry, NextMatch } from "@/types/duzcespor";

interface MatchScheduleProps {
  nextMatch: NextMatch;
  matchHistory: MatchHistoryEntry[];
}

const OUTCOME_CLASSES: Record<MatchHistoryEntry["outcome"], string> = {
  win: "bg-primary-container text-on-primary-container",
  draw: "bg-surface-container-high text-on-surface-variant",
  loss: "bg-error-container text-on-error-container",
};

const COUNTDOWN_REFRESH_MS = 60_000;

function useCountdownLabel(targetIso: string): string {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const update = () => {
      const diffMs = new Date(targetIso).getTime() - Date.now();
      if (diffMs <= 0) {
        setLabel("Maç zamanı geldi");
        return;
      }
      const totalMinutes = Math.floor(diffMs / 60000);
      const days = Math.floor(totalMinutes / (60 * 24));
      const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
      const minutes = totalMinutes % 60;
      setLabel(`${days}g ${hours}s ${minutes}dk kaldı`);
    };
    update();
    const intervalId = window.setInterval(update, COUNTDOWN_REFRESH_MS);
    return () => window.clearInterval(intervalId);
  }, [targetIso]);

  return label;
}

export function MatchSchedule({ nextMatch, matchHistory }: MatchScheduleProps) {
  const countdownLabel = useCountdownLabel(nextMatch.kickoffIso);

  return (
    <div className="flex flex-col gap-stack-md">
      <div className="flex flex-col items-center gap-3 rounded-xl border border-surface-container-low bg-surface-container-lowest p-4">
        <div className="flex w-full items-center justify-center gap-4">
          <div className="flex flex-1 flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#DC2626]/20 bg-surface-container">
              <span className="font-headline-md text-headline-md text-on-surface">
                {nextMatch.homeTeamAbbreviation}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-center text-on-surface">{nextMatch.homeTeam}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-label-sm text-label-sm rounded-full bg-background-subtle px-2 py-1 text-outline-variant">
              {nextMatch.league}
            </span>
            <span className="font-headline-lg-mobile text-headline-lg-mobile mt-1 font-bold text-on-surface">
              VS
            </span>
          </div>
          <div className="flex flex-1 flex-col items-center gap-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container">
              <span className="font-headline-md text-headline-md text-on-surface">
                {nextMatch.awayTeamAbbreviation}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-center text-on-surface">{nextMatch.awayTeam}</span>
          </div>
        </div>
        <div className="h-px w-full bg-surface-container-low" />
        <div className="flex items-center gap-2 text-[#DC2626]">
          <Icon name="schedule" className="text-lg" />
          <span className="font-label-lg text-label-lg font-bold tracking-wide">{nextMatch.kickoffLabel}</span>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant">{countdownLabel}</p>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-label-lg text-label-lg font-semibold text-on-surface">Son Maçlar</span>
        <div className="flex flex-col gap-2">
          {matchHistory.map((match) => (
            <div key={match.id} className="flex items-center justify-between rounded-xl bg-background-subtle p-3">
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">{match.opponent}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">{match.date}</p>
              </div>
              <span className={`font-label-lg text-label-lg rounded-full px-3 py-1 ${OUTCOME_CLASSES[match.outcome]}`}>
                {match.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
