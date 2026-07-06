export interface CitizenProfile {
  fullName: string;
  maskedTcId: string;
  neighborhood: string;
  memberSince: string;
}

export interface SavedCard {
  id: string;
  label: string;
  maskedNumber: string;
  balance: number | null;
}

export interface WorkflowHistoryEntry {
  id: string;
  title: string;
  detail: string;
  date: string;
}
