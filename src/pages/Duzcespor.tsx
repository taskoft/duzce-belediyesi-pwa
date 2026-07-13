import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { StandingsTable } from "@/components/duzcespor/StandingsTable";
import { MatchSchedule } from "@/components/duzcespor/MatchSchedule";
import { TeamRoster } from "@/components/duzcespor/TeamRoster";
import { StadiumInfoCard } from "@/components/duzcespor/StadiumInfoCard";
import { useAsyncData } from "@/hooks/useAsyncData";
import duzcesporDataFallback from "@/data/duzcesporData.json";
import duzcesporIcon from "../../assets/icons/duzce-spor.png";
import type { DuzcesporData } from "@/types/duzcespor";

export function Duzcespor() {
  const { data: duzcesporData, isLoading } = useAsyncData<DuzcesporData>(
    "/api/duzcespor",
    duzcesporDataFallback as DuzcesporData,
  );

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[76px] pt-[56px]">
        <div className="flex items-center gap-2 pt-stack-md">
          <img src={duzcesporIcon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Düzcespor Portalı</h2>
        </div>

        {isLoading ? (
          <PageLoader />
        ) : (
          <div className="relative flex flex-col gap-stack-lg overflow-hidden rounded-2xl border border-surface-container-low bg-surface p-4 pl-5 shadow-sm">
            <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#DC2626]" />
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-full bg-[#DC2626]/5" />
            <MatchSchedule nextMatch={duzcesporData.nextMatch} matchHistory={duzcesporData.matchHistory} />
            <StandingsTable standings={duzcesporData.standings} />
            <StadiumInfoCard stadium={duzcesporData.stadium} />
            <TeamRoster players={duzcesporData.roster} />
          </div>
        )}

        <div className="h-2" />
      </main>

      <BottomNav />
    </>
  );
}
