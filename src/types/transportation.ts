export interface BusStop {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export interface BusLine {
  id: string;
  lineNumber: string;
  name: string;
  scheduleHours: string[];
  stops: BusStop[];
}

export type TransportationTab = "bus" | "card";

export interface TaxiStand {
  id: string;
  name: string;
  phone: string;
  distance: string;
}

export interface LostItem {
  id: string;
  name: string;
  icon: string;
  location: string;
  date: string;
  status: string;
}

export interface TransportationData {
  busLines: BusLine[];
  cardBalance: number;
  quickTopUpAmounts: number[];
  defaultOrigin: string;
  destinationSuggestions: string[];
  taxiStands: TaxiStand[];
  lostItems: LostItem[];
}
