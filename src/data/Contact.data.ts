import { MailIcon } from "lucide-vue-next";
import {
	GithubIcon,
	TelegramIcon,
	TwitchIcon,
	XIcon,
} from "@/components/icons/socials";
import type { IContact } from "@/types/contacts.type";

export const ContactsData: IContact[] = [
	{
		url: "mailto:misha@valory.su",
		tag: "misha@valory.su",
		name: "Почта",
		color: "#007bff",
		icon: MailIcon,
	},
	{
		url: "https://github.com/haxgun",
		tag: "@haxgun",
		name: "Github",
		color: "#6c757d",
		icon: GithubIcon,
	},
	{
		url: "http://t.me/haxgun",
		tag: "@haxgun",
		name: "Telegram",
		color: "#24A1DE",
		icon: TelegramIcon,
	},
	{
		url: "https://twitch.tv/magicxcmd",
		tag: "@MAGICXcmd",
		name: "Twitch",
		color: "#9146ff",
		icon: TwitchIcon,
	},
	{
		url: "https://x.com/haxguno",
		tag: "@haxguno",
		name: "X",
		color: "#ffffff",
		icon: XIcon,
	},
];
