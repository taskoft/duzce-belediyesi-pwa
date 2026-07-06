import { useCallback, useState } from "react";
import { useToast } from "@/hooks/useToast";
import socialServicesData from "@/data/socialServicesData.json";
import type { VolunteerOpportunity } from "@/types/socialServices";

export function useSocialVolunteering() {
  const { show: showToast } = useToast();

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

  return {
    categories: socialServicesData.categories,
    opportunities: socialServicesData.opportunities as VolunteerOpportunity[],
    appliedIds,
    applyToOpportunity,
    suggestionTitle,
    setSuggestionTitle,
    suggestionDetail,
    setSuggestionDetail,
    isSuggestionSubmitted,
    submitSuggestion,
  };
}
