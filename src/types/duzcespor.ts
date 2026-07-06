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
