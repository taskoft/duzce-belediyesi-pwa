import { useCallback, useState } from "react";
import { useToast } from "@/hooks/useToast";
import { useAsyncData } from "@/hooks/useAsyncData";
import { fetchWithFallback } from "@/services/apiClient";
import beyazMasaDataFallback from "@/data/beyazMasaData.json";
import type { ComplaintCategory, ComplaintSubmissionStatus, TrackedComplaint } from "@/types/beyazMasa";

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const SUBMIT_SIMULATION_MS = 1200;

export function useBeyazMasaForm() {
  const { show: showToast } = useToast();
  const { data: categories, isLoading } = useAsyncData<ComplaintCategory[]>(
    "/api/beyaz-masa/categories",
    beyazMasaDataFallback.categories,
  );

  const [categoryId, setCategoryId] = useState("");
  const [details, setDetails] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const [status, setStatus] = useState<ComplaintSubmissionStatus>("idle");
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  const [trackingCode, setTrackingCode] = useState("");
  const [trackedResult, setTrackedResult] = useState<TrackedComplaint | null | undefined>(undefined);

  const attachFile = useCallback(
    (file: File | null) => {
      if (!file) {
        setAttachment(null);
        return;
      }
      if (file.size > MAX_FILE_SIZE_BYTES) {
        showToast("Dosya boyutu 5MB sınırını aşıyor.", "error");
        return;
      }
      setAttachment(file);
    },
    [showToast],
  );

  const isFormValid = categoryId !== "" && details.trim().length > 0;

  const submitComplaint = useCallback(() => {
    if (!isFormValid) {
      showToast("Lütfen kategori seçip talep detayını doldurun.", "error");
      return;
    }

    setStatus("submitting");
    window.setTimeout(() => {
      const code = `DX-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedCode(code);
      setStatus("submitted");
      showToast("Talebiniz başarıyla iletildi.", "success");
    }, SUBMIT_SIMULATION_MS);
  }, [isFormValid, showToast]);

  const resetForm = useCallback(() => {
    setCategoryId("");
    setDetails("");
    setAttachment(null);
    setStatus("idle");
    setSubmittedCode(null);
  }, []);

  const trackComplaint = useCallback(async () => {
    const normalizedCode = trackingCode.trim().toUpperCase();
    const complaints = await fetchWithFallback<TrackedComplaint[]>(
      `/api/beyaz-masa/complaints/${normalizedCode}`,
      beyazMasaDataFallback.trackedComplaints as TrackedComplaint[],
    );
    const match = complaints.find((complaint) => complaint.code.toUpperCase() === normalizedCode);
    setTrackedResult(match ?? null);
  }, [trackingCode]);

  return {
    categories,
    isLoading,
    categoryId,
    setCategoryId,
    details,
    setDetails,
    attachment,
    attachFile,
    status,
    submittedCode,
    isFormValid,
    submitComplaint,
    resetForm,
    trackingCode,
    setTrackingCode,
    trackedResult,
    trackComplaint,
  };
}
