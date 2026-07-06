import { useCallback, useState } from "react";
import { useToast } from "@/hooks/useToast";
import type { BungalowFacility } from "@/types/cityGuide";

const BOOKING_PROCESSING_MS = 1500;

export function useBungalowBooking() {
  const { show: showToast } = useToast();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestCount, setGuestCount] = useState(2);
  const [isBooking, setIsBooking] = useState(false);

  const isDateRangeValid = Boolean(checkInDate) && Boolean(checkOutDate) && checkOutDate > checkInDate;

  const bookNow = useCallback(
    (bungalow: BungalowFacility): Promise<boolean> => {
      return new Promise((resolve) => {
        if (!bungalow.availabilityStatus) {
          showToast("Bu tesis şu anda müsait değil.", "error");
          resolve(false);
          return;
        }
        if (!isDateRangeValid) {
          showToast("Lütfen geçerli giriş ve çıkış tarihlerini seçin.", "error");
          resolve(false);
          return;
        }

        setIsBooking(true);
        window.setTimeout(() => {
          setIsBooking(false);
          showToast(`${bungalow.name} için rezervasyonunuz alındı.`, "success");
          resolve(true);
        }, BOOKING_PROCESSING_MS);
      });
    },
    [isDateRangeValid, showToast],
  );

  return {
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guestCount,
    setGuestCount,
    isBooking,
    isDateRangeValid,
    bookNow,
  };
}
