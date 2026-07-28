# Airlove Blog

这是基于 Astro + Firefly / dumpling-theme 界面整理出的 Airlove Blog 第一版。

## 本地运行

```powershell
pnpm install
pnpm dev
```

浏览器访问：`http://localhost:4321`

## 已完成的个人化修改

- 站点名称：Airlove Blog
- 博主名称：Airlove
- 副标题：往昔之局未竞
- 主题色相：270
- 建站日期：2026-07-21
- 清理原作者域名、联系方式、情侣信息、统计 ID、Gist 配置和收款码
- 评论、外部动态、朋友圈、看板娘暂时关闭
- 新增项目、技能、时间线页面
- 文章、日记、相册和动态替换为 Airlove 示例内容

## 部署前必须修改

1. `src/config/siteConfig.ts` 中的 `site_url`
2. `src/assets/images/avatar.webp`、`public/images/avatar.jpg` 和 `public/favicon/airlove.jpg`
3. `src/config/profileConfig.ts` 中的个人链接
4. 需要评论、赞助、Gist 后台时，再填写自己的服务地址和密钥

不要把 GitHub Token、后台明文密码、私人照片或收款码直接提交到公开仓库。
