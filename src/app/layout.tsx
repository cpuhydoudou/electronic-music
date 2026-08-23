import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "声波档案馆｜电子音乐入门指南",
  description: "从电流到舞池，用互动实验认识电子音乐的历史、流派、合成器与节拍。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
