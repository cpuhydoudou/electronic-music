# 声波档案馆（Sonic Archive）

一个面向中文读者的互动电子音乐科普网站。从电子音乐历史、经典流派和合成器信号链出发，通过 Web Audio API 让读者亲手试听基础波形与节拍。

## 功能

- 电子音乐历史时间线
- House、Techno、Trance、Dubstep、Ambient、Drum & Bass 流派地图
- 合成器信号链图解
- 正弦波、方波、锯齿波试听与频率调节
- 可调 BPM 的四拍节拍器
- 可搜索的电子音乐术语词典
- 响应式布局与基础无障碍支持

## 本地运行

需要 Node.js 20 或更高版本，以及 pnpm（也可以使用 npm）。

```bash
pnpm install
pnpm dev
```

浏览器访问 [http://localhost:3000](http://localhost:3000)。

## 质量检查

```bash
pnpm lint
pnpm build
```

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 在 Vercel 中选择 **New Project** 并导入仓库。
3. Vercel 会自动识别 Next.js，保持默认设置并点击 **Deploy**。
4. 此后推送到 `main` 分支会自动更新正式网站，其他分支会生成预览部署。

## 技术栈

- Next.js 15（App Router）
- React 19
- TypeScript
- Tailwind CSS 4
- Web Audio API
