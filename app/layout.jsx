import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Geist, Press_Start_2P } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const pressStart2P = Press_Start_2P({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-press-start-2p",
    display: "swap",
});

export const metadata = {
    title: "MD Jihad Hossain — Frontend Developer",
    description:
        "Portfolio of MD Jihad Hossain, a passionate Frontend Developer specializing in React, Next.js, and modern web technologies.",
    keywords: [
        "Frontend Developer",
        "React Developer",
        "Next.js",
        "Portfolio",
        "MD Jihad Hossain",
    ],
    authors: [{ name: "MD Jihad Hossain" }],
    openGraph: {
        title: "MD Jihad Hossain — Frontend Developer",
        description: "Crafting digital experiences with modern technologies.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`dark ${geist.variable} ${pressStart2P.variable}`}
            suppressHydrationWarning
        >
            <body className="antialiased">
                <ThemeProvider>
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
