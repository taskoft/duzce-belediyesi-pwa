export interface MunicipalInvoice {
  id: string;
  title: string;
  amount: number;
  dueDate: string;
  isOverdue: boolean;
}

export type PaymentStatus = "idle" | "processing" | "success";
