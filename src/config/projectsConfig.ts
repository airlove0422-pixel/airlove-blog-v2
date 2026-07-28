import type { FriendLink } from "../types/config";

export const projectsPageConfig = { columns: 2 };

export const projectsConfig: FriendLink[] = [
	{
		title: "古琴文化学习小程序",
		imgurl: "/images/guqin-project.png",
		desc: "融合古琴知识学习、内容展示与识谱功能的微信小程序项目。",
		siteurl: "#",
		tags: ["微信小程序", "Django", "计算机视觉"],
		weight: 10,
		enabled: true,
	},
	{
		title: "智能睡眠数据分析与温控系统",
		imgurl: "/images/sleep-project.png",
		desc: "使用睡眠数据、LSTM 时序预测与温控策略探索睡眠质量改善。",
		siteurl: "#",
		tags: ["Python", "LSTM", "睡眠健康"],
		weight: 9,
		enabled: true,
	},
];

export const getEnabledProjects = (): FriendLink[] =>
	projectsConfig
		.filter((project) => project.enabled)
		.sort((a, b) => b.weight - a.weight);
