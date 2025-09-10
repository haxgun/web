export interface IContributionDay {
	date: string;
	count: number;
	level: number;
}

export interface IContributionWeek {
	days: IContributionDay[];
}

export interface IContributionsData {
	weeks: IContributionWeek[];
	totalContributions: number;
}
