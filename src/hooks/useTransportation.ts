import { useEffect, useMemo, useState } from "react";
import { sanitizeNumericInput, formatCardNumber } from "@/utils/formatters";
import { useAsyncData } from "@/hooks/useAsyncData";
import transportationDataFallback from "@/data/transportationData.json";
import type { TransportationData, TransportationTab } from "@/types/transportation";

const TRACKING_INTERVAL_MS = 1200;
const PROGRESS_STEP = 0.05;
const CARD_NUMBER_DIGIT_LENGTH = 16;

export function useTransportation() {
  const { data: transportationData, isLoading } = useAsyncData<TransportationData>(
    "/api/transportation",
    transportationDataFallback as TransportationData,
  );
  const busLines = transportationData.busLines;

  const [activeTab, setActiveTab] = useState<TransportationTab>("bus");
  const [activeLineId, setActiveLineId] = useState(busLines[0]?.id ?? "");
  const [routeProgress, setRouteProgress] = useState(0);
  const [balance, setBalance] = useState(transportationData.cardBalance);
  const [selectedAmount, setSelectedAmount] = useState<number>(transportationData.quickTopUpAmounts[1] ?? 50);
  const [cardNumber, setCardNumberRaw] = useState("");

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setActiveLineId((prev) => prev || busLines[0]?.id || "");
    setBalance(transportationData.cardBalance);
    setSelectedAmount(transportationData.quickTopUpAmounts[1] ?? 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const activeLine = useMemo(
    () => busLines.find((line) => line.id === activeLineId) ?? busLines[0],
    [activeLineId, busLines],
  );

  useEffect(() => {
    if (activeTab !== "bus" || !activeLine) {
      return;
    }
    const intervalId = window.setInterval(() => {
      setRouteProgress((prev) => (prev + PROGRESS_STEP) % 1);
    }, TRACKING_INTERVAL_MS);
    return () => window.clearInterval(intervalId);
  }, [activeTab, activeLineId, activeLine]);

  const setCardNumber = (value: string) => {
    setCardNumberRaw(sanitizeNumericInput(value, CARD_NUMBER_DIGIT_LENGTH));
  };

  const topUpBalance = () => {
    setBalance((prev) => Math.round((prev + selectedAmount) * 100) / 100);
  };

  return {
    isLoading,
    activeTab,
    setActiveTab,
    busLines,
    activeLine,
    activeLineId,
    setActiveLineId,
    routeProgress,
    balance,
    quickTopUpAmounts: transportationData.quickTopUpAmounts,
    selectedAmount,
    setSelectedAmount,
    cardNumber,
    cardNumberFormatted: formatCardNumber(cardNumber),
    setCardNumber,
    topUpBalance,
    taxiStands: transportationData.taxiStands,
    lostItems: transportationData.lostItems,
    defaultOrigin: transportationData.defaultOrigin,
    destinationSuggestions: transportationData.destinationSuggestions,
  };
}
