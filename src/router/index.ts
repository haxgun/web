import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/cv",
			name: "cv",
			component: () => import("@/pages/CvPage.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "NotFound",
			redirect: { name: "home" },
		},
	],
});

export default router;
