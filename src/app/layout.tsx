import "@/app/globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

const SITE_URL = "https://agrawalri.github.io";
const TITLE = "Riya Agrawal | Mechanical Engineer";
const DESCRIPTION =
    "M.S. Mechanical Engineering student at Northwestern University designing orthoses and medical devices, from FEA and CAD to machined prototypes, mechanical testing, and gait analysis.";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: TITLE,
    description: DESCRIPTION,
    authors: [{ name: "Riya Agrawal", url: SITE_URL }],
    keywords: [
        "Riya Agrawal",
        "Mechanical Engineering",
        "Biomechanics",
        "Orthotics",
        "Prosthetics",
        "Medical Devices",
        "Northwestern University",
        "FEA",
        "Abaqus",
        "Product Design",
    ],
    creator: "Riya Agrawal",
    publisher: "Riya Agrawal",
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: SITE_URL,
        siteName: "Riya Agrawal",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
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
            className={`${outfit.variable}`}
            suppressHydrationWarning={true}
        >
            <body
                className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden dark:bg-[#0b0a09]`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="bg-white dark:bg-black mx-auto pt-6 sm:pt-12 w-full max-w-[1520px] text-foreground">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
