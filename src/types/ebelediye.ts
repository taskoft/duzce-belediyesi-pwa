export interface MunicipalInvoice {
  id: string;
  title: string;
  description: string;
  amount: number;
  dueDate: string;
  isOverdue: boolean;
}

export type PaymentStatus = "idle" | "processing" | "success";

export interface PaymentHistoryEntry {
  id: string;
  title: string;
  amount: number;
  date: string;
}

export interface QuickPaymentLink {
  id: string;
  label: string;
  icon: string;
  phone: string;
}
