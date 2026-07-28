import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: "公告",
	content: "欢迎来到 Airlove Blog。这里记录学习、项目与生活。",
	closable: true,
	link: {
		enable: true,
		text: "关于我",
		url: "/about/",
		external: false,
	},
};
