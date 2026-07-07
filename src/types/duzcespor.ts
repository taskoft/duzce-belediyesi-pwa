export interface StandingsRow {
  position: number;
  team: string;
  points: number;
  isHighlighted: boolean;
}

export interface NextMatch {
  homeTeam: string;
  homeTeamAbbreviation: string;
  awayTeam: string;
  awayTeamAbbreviation: string;
  league: string;
  kickoffLabel: string;
  kickoffIso: string;
}

export type MatchOutcome = "win" | "draw" | "loss";

export interface MatchHistoryEntry {
  id: string;
  opponent: string;
  result: string;
  outcome: MatchOutcome;
  date: string;
}

export type PlayerPosition = "Kaleci" | "Defans" | "Orta Saha" | "Forvet";

export interface Player {
  id: string;
  name: string;
  number: number;
  position: PlayerPosition;
}

export interface StadiumInfo {
  name: string;
  address: string;
  capacity: string;
  ticketInfo: string;
  phone: string;
}

export interface DuzcesporData {
  standings: StandingsRow[];
  nextMatch: NextMatch;
  matchHistory: MatchHistoryEntry[];
  roster: Player[];
  stadium: StadiumInfo;
}
