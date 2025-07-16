export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionWeek {
  days: ContributionDay[]
}

export interface ContributionsData {
  weeks: ContributionWeek[]
  totalContributions: number
}
