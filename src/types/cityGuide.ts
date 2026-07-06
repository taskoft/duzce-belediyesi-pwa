export interface EmergencyNumber {
  id: string;
  label: string;
  phone: string;
}

export interface DirectoryEntry {
  id: string;
  title: string;
  phone: string;
  icon: string;
}

export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  distance: string;
}

export interface Destination {
  id: string;
  title: string;
  description: string;
  rating: number;
  imageUrl: string;
}

export type KentRehberiTab = "corporate" | "tourism";
