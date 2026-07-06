export interface VolunteerCategory {
  id: string;
  label: string;
  icon: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  category: string;
  spotsAvailable: number;
}

export interface AskidaFaturaInvoice {
  id: string;
  type: string;
  icon: string;
  neighborhood: string;
  amount: number;
}

export interface SocialCatalog {
  categories: VolunteerCategory[];
  opportunities: VolunteerOpportunity[];
}

export interface AskidaFaturaCatalog {
  invoices: AskidaFaturaInvoice[];
  pendingCount: number;
  paidThisMonth: number;
}
