import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata = {
  title: "MD Jihad Hossain — Frontend Developer",
  description:
    "Portfolio of MD Jihad Hossain, a passionate Frontend Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "Portfolio", "MD Jihad Hossain"],
  authors: [{ name: "MD Jihad Hossain" }],
  openGraph: {
    title: "MD Jihad Hossain — Frontend Developer",
    description: "Crafting digital experiences with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
