import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Deopa — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Vaibhav Deopa — AI Engineer and Full Stack Developer. Explore projects, blog posts, and more.",
  keywords: [
    "Vaibhav Deopa",
    "AI Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Machine Learning",
    "Web Development",
  ],
  authors: [{ name: "Vaibhav Deopa" }],
  openGraph: {
    title: "Vaibhav Deopa — AI Engineer & Full Stack Developer",
    description:
      "Portfolio of Vaibhav Deopa — AI Engineer and Full Stack Developer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Deopa — AI Engineer & Full Stack Developer",
    description:
      "Portfolio of Vaibhav Deopa — AI Engineer and Full Stack Developer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-navy-950 text-text-primary">
        {children}
      </body>
    </html>
  );
}
