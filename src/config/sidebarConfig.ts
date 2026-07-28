import type { SidebarLayoutConfig } from "../types/config";

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	enable: true,
	position: "both",
	tabletSidebar: "left",
	showBothSidebarsOnPostPage: true,
	leftComponents: [
		{ type: "profile", enable: true, position: "top", showOnPostPage: false },
		{
			type: "weather",
			enable: true,
			position: "top",
			showOnPostPage: true,
			showOnNonPostPage: true,
		},
		{ type: "announcement", enable: true, position: "top", showOnPostPage: false },
		{ type: "music", enable: false, position: "sticky", showOnPostPage: false },
		{
			type: "categories",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			responsive: { collapseThreshold: 5 },
		},
		{
			type: "tags",
			enable: true,
			position: "sticky",
			showOnPostPage: false,
			responsive: { collapseThreshold: 20 },
		},
		{ type: "quoteOfTheDay", enable: true, position: "sticky", showOnPostPage: false },
		{ type: "postDirectory", enable: true, position: "sticky", showOnPostPage: true, showOnNonPostPage: false },
	],
	rightComponents: [
		{
			type: "relationship",
			enable: true,
			position: "top",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
		{
			type: "douyinHot",
			enable: true,
			position: "top",
			showOnPostPage: false,
			showOnNonPostPage: true,
		},
		{ type: "stats", enable: true, position: "top", showOnPostPage: false },
		{ type: "calendar", enable: true, position: "top", showOnPostPage: false },
		{ type: "recentItems", enable: true, position: "sticky", showOnPostPage: false },
		{ type: "sidebarToc", enable: true, position: "sticky", showOnPostPage: true, showOnNonPostPage: false },
	],
	mobileBottomComponents: [
		{ type: "profile", enable: true, showOnPostPage: true },
		{ type: "recentItems", enable: true, showOnPostPage: true },
	],
};
