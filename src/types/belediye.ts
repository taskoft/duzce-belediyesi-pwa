export interface Mayor {
  name: string;
  title: string;
  message: string;
}

export interface CorporateStructureEntry {
  id: string;
  label: string;
  sublabel: string;
  icon: string;
}

export interface DeceasedNotice {
  id: string;
  name: string;
  location: string;
  date: string;
  lat: number;
  lng: number;
}

export interface TenderNotice {
  id: string;
  category: string;
  title: string;
  date: string;
  urgencyLabel: string | null;
}

export interface GazetteIssue {
  id: string;
  title: string;
  subtitle: string;
}

export interface BelediyeData {
  mayor: Mayor;
  corporateStructure: CorporateStructureEntry[];
  vefatEdenler: DeceasedNotice[];
  ihaleIlanlari: TenderNotice[];
  eGazete: GazetteIssue[];
}
