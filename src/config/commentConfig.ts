import type { CommentConfig } from "../types/config";

export const commentConfig: CommentConfig = {
	type: "none",
	twikoo: { envId: "", lang: "zh-CN", visitorCount: false },
	waline: { serverURL: "", lang: "zh-CN", emoji: [], login: "enable", visitorCount: false },
	artalk: { server: "", locale: "zh-CN", visitorCount: false },
	giscus: {
		repo: "",
		repoId: "",
		category: "General",
		categoryId: "",
		mapping: "title",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		lang: "zh-CN",
		loading: "lazy",
	},
	disqus: { shortname: "" },
};
