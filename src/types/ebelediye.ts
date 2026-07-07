export interface MunicipalInvoice {
  id: string;
  title: string;
  description: string;
  amount: number;
  dueDate: string;
  isOverdue: boolean;
}

export type PaymentStatus = "idle" | "processing" | "success";
