export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  distanceKm: number;
  phone: string;
  lat: number;
  lng: number;
}

export interface DutyScheduleEntry {
  day: string;
  pharmacyName: string;
}

export interface EczaneData {
  pharmacies: Pharmacy[];
  dutySchedule: DutyScheduleEntry[];
}
