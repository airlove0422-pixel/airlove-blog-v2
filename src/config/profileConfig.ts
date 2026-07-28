import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 目前使用主题自带的临时头像；替换 src/assets/images/avatar.webp 即可换成你的头像。
	avatar: "/images/avatar.webp",
	avatarOffWork: "",
	name: "Airlove",
	displayName: "Airlove",
	occupation: "[网络安全学习者 / 开发者]",
	bio: ["往昔之局未竞"],
	links: [
		{
			name: "GitHub",
			icon: "simple-icons:github",
			url: "https://github.com/airlove0422-pixel",
			showName: false,
		},
		{
			name: "微信",
			icon: "simple-icons:wechat",
			url: "/images/wechat-qr.jpg",
			showName: false,
		},
		{
			name: "QQ",
			icon: "simple-icons:tencentqq",
			url: "/images/qq-qr.jpg",
			showName: false,
		},
	],
};
