import { useMemo, useState } from "react";
import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { PageLoader } from "@/components/common/PageLoader";
import { BottomNav } from "@/components/dashboard/BottomNav";
import { PharmacyHeader } from "@/components/eczane/PharmacyHeader";
import { PharmacyCardList } from "@/components/eczane/PharmacyCardList";
import { WeeklyDutySchedule } from "@/components/eczane/WeeklyDutySchedule";
import { useAsyncData } from "@/hooks/useAsyncData";
import eczaneDataFallback from "@/data/eczaneData.json";
import type { EczaneData } from "@/types/eczane";

export function Eczane() {
  const { data: eczaneData, isLoading } = useAsyncData<EczaneData>("/api/eczane", eczaneDataFallback);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPharmacies = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) {
      return eczaneData.pharmacies;
    }
    return eczaneData.pharmacies.filter(
      (pharmacy) =>
        pharmacy.name.toLowerCase().includes(normalizedSearch) ||
        pharmacy.address.toLowerCase().includes(normalizedSearch),
    );
  }, [eczaneData.pharmacies, searchTerm]);

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 overflow-y-auto pb-[76px] pt-[56px]">
        <PharmacyHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          resultCount={filteredPharmacies.length}
        />
        {isLoading ? (
          <PageLoader />
        ) : (
          <>
            <WeeklyDutySchedule schedule={eczaneData.dutySchedule} />
            <PharmacyCardList pharmacies={filteredPharmacies} />
          </>
        )}
      </main>

      <BottomNav />
    </>
  );
}
