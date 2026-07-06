import { useEffect, useMemo, useState } from "react";
import { sanitizeNumericInput, formatCardNumber } from "@/utils/formatters";
import transportationData from "@/data/transportationData.json";
import type { BusLine, TransportationTab } from "@/types/transportation";

const TRACKING_INTERVAL_MS = 1200;
const PROGRESS_STEP = 0.05;
const CARD_NUMBER_DIGIT_LENGTH = 16;

const busLines = transportationData.busLines as BusLine[];

export function useTransportation() {
  const [activeTab, setActiveTab] = useState<TransportationTab>("bus");
  const [activeLineId, setActiveLineId] = useState(busLines[0]?.id ?? "");
  const [routeProgress, setRouteProgress] = useState(0);

  const activeLine = useMemo(
    () => busLines.find((line) => line.id === activeLineId) ?? busLines[0],
    [activeLineId],
  );

  useEffect(() => {
    if (activeTab !== "bus") {
      return;
    }
    const intervalId = window.setInterval(() => {
      setRouteProgress((prev) => (prev + PROGRESS_STEP) % 1);
    }, TRACKING_INTERVAL_MS);
    return () => window.clearInterval(intervalId);
  }, [activeTab, activeLineId]);

  const [balance, setBalance] = useState(transportationData.cardBalance);
  const [selectedAmount, setSelectedAmount] = useState<number>(transportationData.quickTopUpAmounts[1] ?? 50);
  const [cardNumber, setCardNumberRaw] = useState("");

  const setCardNumber = (value: string) => {
    setCardNumberRaw(sanitizeNumericInput(value, CARD_NUMBER_DIGIT_LENGTH));
  };

  const topUpBalance = () => {
    setBalance((prev) => Math.round((prev + selectedAmount) * 100) / 100);
  };

  return {
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
  };
}
