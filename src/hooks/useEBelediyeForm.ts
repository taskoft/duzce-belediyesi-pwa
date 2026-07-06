import { useCallback, useMemo, useState } from "react";
import { useToast } from "@/hooks/useToast";
import { sanitizeNumericInput, formatCardNumber, formatExpiryDate } from "@/utils/formatters";
import { fetchWithFallback } from "@/services/apiClient";
import invoicesDataFallback from "@/data/ebelediyeInvoices.json";
import type { MunicipalInvoice, PaymentStatus } from "@/types/ebelediye";

const TC_ID_LENGTH = 11;
const CARD_NUMBER_DIGIT_LENGTH = 16;
const CVV_LENGTH = 3;
const PAYMENT_PROCESSING_MS = 2000;
const SUCCESS_DISPLAY_MS = 1500;

export function useEBelediyeForm() {
  const { show: showToast } = useToast();

  const [tcId, setTcIdRaw] = useState("");
  const [hasQueried, setHasQueried] = useState(false);
  const [isQuerying, setIsQuerying] = useState(false);
  const [invoices, setInvoices] = useState<MunicipalInvoice[]>([]);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumberRaw] = useState("");
  const [expiryDate, setExpiryDateRaw] = useState("");
  const [cvv, setCvvRaw] = useState("");
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("idle");

  const isTcIdValid = tcId.length === TC_ID_LENGTH;

  const setTcId = useCallback((value: string) => {
    setTcIdRaw(sanitizeNumericInput(value, TC_ID_LENGTH));
  }, []);

  const searchInvoices = useCallback(async () => {
    if (!isTcIdValid) {
      showToast("Lütfen geçerli bir 11 haneli T.C. Kimlik No giriniz.", "error");
      return;
    }

    setIsQuerying(true);
    const results = await fetchWithFallback<MunicipalInvoice[]>(
      `/api/ebelediye/invoices?tcId=${tcId}`,
      invoicesDataFallback as MunicipalInvoice[],
    );
    setInvoices(results);
    setSelectedIds(new Set(results.map((invoice) => invoice.id)));
    setIsQuerying(false);
    setHasQueried(true);
  }, [isTcIdValid, tcId, showToast]);

  const toggleInvoiceSelection = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const selectedTotal = useMemo(
    () =>
      invoices
        .filter((invoice) => selectedIds.has(invoice.id))
        .reduce((sum, invoice) => sum + invoice.amount, 0),
    [invoices, selectedIds],
  );

  const setCardNumber = useCallback((value: string) => {
    setCardNumberRaw(sanitizeNumericInput(value, CARD_NUMBER_DIGIT_LENGTH));
  }, []);

  const setExpiryDate = useCallback((value: string) => {
    setExpiryDateRaw(formatExpiryDate(value));
  }, []);

  const setCvv = useCallback((value: string) => {
    setCvvRaw(sanitizeNumericInput(value, CVV_LENGTH));
  }, []);

  const openPayment = useCallback(() => {
    if (selectedTotal <= 0) {
      showToast("Ödeme yapmak için en az bir borç seçmelisiniz.", "error");
      return;
    }
    setIsPaymentOpen(true);
  }, [selectedTotal, showToast]);

  const resetPaymentFields = useCallback(() => {
    setIsPaymentOpen(false);
    setCardName("");
    setCardNumberRaw("");
    setExpiryDateRaw("");
    setCvvRaw("");
    setPaymentStatus("idle");
  }, []);

  const closePayment = useCallback(() => {
    if (paymentStatus === "processing") {
      return;
    }
    resetPaymentFields();
  }, [paymentStatus, resetPaymentFields]);

  const submitPayment = useCallback(() => {
    if (paymentStatus === "processing" || selectedTotal <= 0) {
      return;
    }

    setPaymentStatus("processing");
    window.setTimeout(() => {
      setPaymentStatus("success");
      showToast("Ödemeniz başarıyla gerçekleştirilmiştir.", "success");

      window.setTimeout(() => {
        setInvoices((prev) => prev.filter((invoice) => !selectedIds.has(invoice.id)));
        setSelectedIds(new Set());
        resetPaymentFields();
      }, SUCCESS_DISPLAY_MS);
    }, PAYMENT_PROCESSING_MS);
  }, [paymentStatus, selectedTotal, selectedIds, showToast, resetPaymentFields]);

  return {
    tcId,
    setTcId,
    isTcIdValid,
    isQuerying,
    hasQueried,
    searchInvoices,
    invoices,
    selectedIds,
    toggleInvoiceSelection,
    selectedTotal,
    isPaymentOpen,
    openPayment,
    closePayment,
    cardName,
    setCardName,
    cardNumberFormatted: formatCardNumber(cardNumber),
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvv,
    setCvv,
    paymentStatus,
    submitPayment,
  };
}
