import type { GuestbookConfig } from "../types/config";

export const guestbookConfig: GuestbookConfig = {
	adminNicknames: ["Airlove"],
	announcements: [
		{
			id: "comment-and-message-rules",
			title: "留言规则",
			summary: "请保持友善、理性和尊重。评论系统目前暂未开放。",
			lead: "请勿发布以下内容：",
			rules: [
				"违反法律法规或侵犯他人合法权益的内容。",
				"辱骂、骚扰、威胁、歧视或恶意攻击。",
				"垃圾广告、恶意推广、诈骗链接或恶意代码。",
				"公开他人隐私或冒充他人身份。",
			],
		},
	],
};
