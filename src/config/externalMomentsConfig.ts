// 外部说说暂时关闭。部署自己的 Gist 后再填写 gistId 与后台密码哈希。
export const externalMomentsConfig = {
	enable: false,
	gistId: "",
	fileName: "moments.json",
	defaultAuthor: "Airlove",
	defaultAvatar: "/images/avatar.jpg",
	adminPasswordHash: "",
	githubToken: process.env.GITHUB_TOKEN || "",
};
