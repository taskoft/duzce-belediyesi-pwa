export interface AssemblyPoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  distanceLabel: string;
}

export interface EmergencyHotline {
  id: string;
  label: string;
  sublabel?: string;
  phone: string;
}

export interface AcilDurumData {
  assemblyPoints: AssemblyPoint[];
  nearestAssemblyPointId: string;
  hotlines: EmergencyHotline[];
  filterChips: string[];
}
