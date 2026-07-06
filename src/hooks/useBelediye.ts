import { useCallback, useState } from "react";
import { useToast } from "@/hooks/useToast";

export function useBelediye() {
  const { show: showToast } = useToast();
  const [isMessageExpanded, setIsMessageExpanded] = useState(false);

  const toggleMessageExpanded = useCallback(() => {
    setIsMessageExpanded((prev) => !prev);
  }, []);

  const submitMayorMessage = useCallback(
    (subject: string, body: string): boolean => {
      if (!subject.trim() || !body.trim()) {
        showToast("Lütfen konu ve mesaj alanlarını doldurun.", "error");
        return false;
      }
      showToast("Mesajınız başkanlık makamına iletildi.", "success");
      return true;
    },
    [showToast],
  );

  return {
    isMessageExpanded,
    toggleMessageExpanded,
    submitMayorMessage,
  };
}
