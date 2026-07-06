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
