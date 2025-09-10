import { Valory } from "@/components/icons/logotypes";
import type { IProject } from "@/types/projects.type";

export const ProjectsData: IProject[] = [
	{
		year: 2023,
		title: "VALORY",
		short_description: "Мультиинструмент для стримеров",
		description: "Description for VALORY",
		preview: "/projects/previews/valory.png",
		thumbnail: "/projects/thumbnails/valory.png",
		link: "https://beta.valory.su",
		stage: "In progress",
		icon: Valory,
		dependencies: [
			"FastAPI",
			"Vue 3",
			"Pinia",
			"TypeScript",
			"PostgreSQL",
			"Redis",
			"SQLAlchemy",
			"Docker",
		],
		color: "#000000",
	},
];
