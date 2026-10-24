import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Varma | Digital Marketing Executive",
  description: "Aditya Varma — Digital Marketing Executive working across digital marketing, social media, SEO, content development, web development, creative production and event marketing.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
