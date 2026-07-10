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
  images: string[];
  featured?: boolean;
  openingHours: string;
  phone: string;
  address: string;
  coordinates: GeoCoordinates;
  bungalowId?: string;
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

export type InfrastructureCategory = "hastane" | "taksi" | "otopark" | "muhtarlik";

export type District =
  | "Merkez"
  | "Akçakoca"
  | "Gölyaka"
  | "Cumayeri"
  | "Çilimli"
  | "Gümüşova"
  | "Kaynaşlı"
  | "Yığılca";

export interface InfrastructureLocation {
  id: string;
  name: string;
  category: InfrastructureCategory;
  district: District;
  openingHours: string;
  address: string;
  phone: string;
  coordinates: GeoCoordinates;
}

export interface CulturalEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
}

export interface CityGuideData {
  emergencyNumbers: EmergencyNumber[];
  directory: DirectoryEntry[];
  pharmacies: Pharmacy[];
  destinations: Destination[];
  bungalows: BungalowFacility[];
  infrastructure: InfrastructureLocation[];
  culturalEvents: CulturalEvent[];
}

export type KentRehberiTab = "corporate" | "tourism" | "infrastructure";
