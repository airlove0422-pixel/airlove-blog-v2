import type { SponsorConfig } from "../types/config";

export const sponsorConfig: SponsorConfig = {
	title: "支持 Airlove Blog",
	description:
		"如果这里的内容曾给你带来一点帮助或快乐，可以请我喝一杯饮料。赞助完全自愿，不会影响任何内容的正常阅读。",
	usage:
		"赞助将优先用于域名、服务器、博客维护和项目开发。请量力而行，学生朋友无需勉强。",
	showSponsorsList: true,
	showButtonInPost: true,
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			qrCode: "/assets/images/sponsor/alipay.jpg",
			link: "",
			description: "打开支付宝扫一扫，金额随意，感谢支持。",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat.jpg",
			link: "",
			description: "使用微信扫一扫，也可以留一句简单的话。",
			enabled: true,
		},
	],
	// 收到赞助后，可以在这里手动添加感谢记录。
	// 示例：
	// { name: "匿名朋友", amount: "¥5", date: "2026-07-26", message: "继续加油！" },
	sponsors: [],
};
