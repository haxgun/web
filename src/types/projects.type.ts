export interface IProject {
	year: number;
	title: string;
	short_description: string;
	description?: string;
	preview?: string;
	thumbnail?: string;
	link?: string;
	icon?: any;
	stage: "In progress" | "Done" | "Deferred";
	dependencies?: string[];
	color?: string;
}
