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
