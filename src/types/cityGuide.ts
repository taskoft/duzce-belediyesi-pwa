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

export type TourismCategory = "Doğa & Şelaleler" | "Tarihi Mekanlar" | "Konaklama";

export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface Destination {
  id: string;
  name: string;
  category: TourismCategory;
  description: string;
  rating: number;
  imageUrl: string;
  openingHours: string;
  phone: string;
  address: string;
  coordinates: GeoCoordinates;
}

export interface BungalowFacility {
  id: string;
  name: string;
  category: TourismCategory;
  description: string;
  imageUrl: string;
  openingHours: string;
  phone: string;
  address: string;
  coordinates: GeoCoordinates;
  pricePerNight: number;
  availabilityStatus: boolean;
}

export interface CityGuideData {
  emergencyNumbers: EmergencyNumber[];
  directory: DirectoryEntry[];
  pharmacies: Pharmacy[];
  destinations: Destination[];
  bungalows: BungalowFacility[];
}

export type KentRehberiTab = "corporate" | "tourism";
