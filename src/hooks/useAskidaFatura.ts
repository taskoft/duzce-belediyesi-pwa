import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";
import { useAsyncData } from "@/hooks/useAsyncData";
import socialServicesDataFallback from "@/data/socialServicesData.json";
import type { AskidaFaturaCatalog, AskidaFaturaInvoice } from "@/types/socialServices";

const SETTLE_PROCESSING_MS = 1800;

export function useAskidaFatura() {
  const { show: showToast } = useToast();
  const { data: catalog, isLoading } = useAsyncData<AskidaFaturaCatalog>(
    "/api/social-services/askida-fatura",
    socialServicesDataFallback.askidaFatura as AskidaFaturaCatalog,
  );

  const [invoices, setInvoices] = useState<AskidaFaturaInvoice[]>([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [paidThisMonth, setPaidThisMonth] = useState(0);
  const [registryIds, setRegistryIds] = useState<Set<string>>(new Set());
  const [isSettling, setIsSettling] = useState(false);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setInvoices(catalog.invoices);
    setPendingCount(catalog.pendingCount);
    setPaidThisMonth(catalog.paidThisMonth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const toggleRegistry = useCallback((id: string) => {
    setRegistryIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const registryTotal = invoices
    .filter((invoice) => registryIds.has(invoice.id))
    .reduce((sum, invoice) => sum + invoice.amount, 0);

  const settleRegistry = useCallback(() => {
    if (registryIds.size === 0) {
      showToast("Ödemek için en az bir fatura seçin.", "error");
      return;
    }

    setIsSettling(true);
    window.setTimeout(() => {
      setInvoices((prev) => prev.filter((invoice) => !registryIds.has(invoice.id)));
      setPendingCount((prev) => Math.max(prev - registryIds.size, 0));
      setPaidThisMonth((prev) => prev + registryIds.size);
      setRegistryIds(new Set());
      setIsSettling(false);
      showToast("Askıda faturalarınız için teşekkür ederiz.", "success");
    }, SETTLE_PROCESSING_MS);
  }, [registryIds, showToast]);

  return {
    isLoading,
    invoices,
    pendingCount,
    paidThisMonth,
    registryIds,
    toggleRegistry,
    registryTotal,
    isSettling,
    settleRegistry,
  };
}
