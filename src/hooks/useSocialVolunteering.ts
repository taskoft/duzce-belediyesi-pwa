import { useCallback, useState } from "react";
import { useToast } from "@/hooks/useToast";
import { useAsyncData } from "@/hooks/useAsyncData";
import socialServicesDataFallback from "@/data/socialServicesData.json";
import type { SocialCatalog, VolunteerOpportunity } from "@/types/socialServices";

export function useSocialVolunteering() {
  const { show: showToast } = useToast();
  const { data: catalog, isLoading } = useAsyncData<SocialCatalog>("/api/social-services/catalog", {
    categories: socialServicesDataFallback.categories,
    opportunities: socialServicesDataFallback.opportunities as VolunteerOpportunity[],
  });

  const [appliedIds, setAppliedIds] = useState<Set<string>>(new Set());

  const applyToOpportunity = useCallback(
    (opportunity: VolunteerOpportunity) => {
      setAppliedIds((prev) => {
        if (prev.has(opportunity.id)) {
          return prev;
        }
        const next = new Set(prev);
        next.add(opportunity.id);
        return next;
      });
      showToast(`"${opportunity.title}" için başvurunuz alındı.`, "success");
    },
    [showToast],
  );

  const [suggestionTitle, setSuggestionTitle] = useState("");
  const [suggestionDetail, setSuggestionDetail] = useState("");
  const [isSuggestionSubmitted, setIsSuggestionSubmitted] = useState(false);

  const submitSuggestion = useCallback(() => {
    if (!suggestionTitle.trim() || !suggestionDetail.trim()) {
      showToast("Lütfen öneri başlığı ve açıklamasını doldurun.", "error");
      return;
    }
    setIsSuggestionSubmitted(true);
    showToast("Öneriniz için teşekkür ederiz.", "success");
    setSuggestionTitle("");
    setSuggestionDetail("");
  }, [suggestionTitle, suggestionDetail, showToast]);

  const [patiDescription, setPatiDescription] = useState("");
  const [patiPhoto, setPatiPhoto] = useState<File | null>(null);

  const submitPatiDestek = useCallback(() => {
    if (!patiDescription.trim()) {
      showToast("Lütfen durumu kısaca açıklayın.", "error");
      return;
    }
    showToast("Pati Destek bildiriminiz alındı.", "success");
    setPatiDescription("");
    setPatiPhoto(null);
  }, [patiDescription, showToast]);

  return {
    isLoading,
    categories: catalog.categories,
    opportunities: catalog.opportunities,
    appliedIds,
    applyToOpportunity,
    suggestionTitle,
    setSuggestionTitle,
    suggestionDetail,
    setSuggestionDetail,
    isSuggestionSubmitted,
    submitSuggestion,
    patiDescription,
    setPatiDescription,
    patiPhoto,
    setPatiPhoto,
    submitPatiDestek,
  };
}
