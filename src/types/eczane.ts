export interface Pharmacy {
  id: string;
  name: string;
  address: string;
  distanceKm: number;
  phone: string;
  lat: number;
  lng: number;
}

export interface EczaneData {
  pharmacies: Pharmacy[];
}
