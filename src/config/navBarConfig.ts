import {
	LinkPreset,
	type NavBarConfig,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		{
			name: "文章",
			url: "/posts/",
			icon: "material-symbols:article-outline",
			children: [
								LinkPreset.Posts,
				LinkPreset.Archive,
				{
					name: "分类",
					url: "/categories/",
					icon: "material-symbols:folder-open-outline",
				},
				{
					name: "标签",
					url: "/archive/#tags",
					icon: "material-symbols:tag",
				},
			],
		},
		{
			name: "动态",
			url: "/moments/",
			icon: "material-symbols:auto-stories-outline",
			children: [
				{
					name: "说说",
					url: "/moments/",
					icon: "material-symbols:chat-bubble-outline",
				},
				{
					name: "相册",
					url: "/album/",
					icon: "material-symbols:photo-album-outline",
				},
				{
					name: "日记",
					url: "/life/notebooks/",
					icon: "material-symbols:menu-book-outline",
				},
				LinkPreset.Guestbook,
			],
		},
		{
			name: "其他",
			url: "/projects/",
			icon: "material-symbols:dashboard-outline",
			children: [
				{
					name: "项目",
					url: "/projects/",
					icon: "material-symbols:rocket-launch-outline",
				},
				{
					name: "技能",
					url: "/skills/",
					icon: "material-symbols:code",
				},
				{
					name: "时间线",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
				LinkPreset.MusicPage,
			],
		},
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/airlove0422-pixel",
			icon: "simple-icons:github",
			external: true,
		},
	],
};

