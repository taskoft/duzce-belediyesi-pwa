import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { Icon } from "@/components/common/Icon";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { StandingsTable } from "@/components/duzcespor/StandingsTable";
import { MatchSchedule } from "@/components/duzcespor/MatchSchedule";
import duzcesporData from "@/data/duzcesporData.json";
import type { MatchHistoryEntry, NextMatch, StandingsRow } from "@/types/duzcespor";

const standings = duzcesporData.standings as StandingsRow[];
const nextMatch = duzcesporData.nextMatch as NextMatch;
const matchHistory = duzcesporData.matchHistory as MatchHistoryEntry[];

export function Duzcespor() {
  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[76px] pt-[56px]">
        <div className="flex items-center gap-2 pt-stack-md">
          <Icon name="sports_soccer" filled className="text-[#DC2626]" />
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Düzcespor Portalı</h2>
        </div>

        <div className="relative flex flex-col gap-stack-lg overflow-hidden rounded-2xl border border-surface-container-low bg-surface p-4 pl-5 shadow-sm">
          <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#DC2626]" />
          <div className="pointer-events-none absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-full bg-[#DC2626]/5" />
          <MatchSchedule nextMatch={nextMatch} matchHistory={matchHistory} />
          <StandingsTable standings={standings} />
        </div>

        <div className="h-2" />
      </main>

      <BottomNav />
    </>
  );
}
