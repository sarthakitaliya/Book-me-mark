import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Savvio",
  description: "Savvio is a modern bookmark manager that lets you save, organize, and discover your favorite links with ease and style.",
  icons:{
    icon: "/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#F5F5F4] text-[#1F1F1F] dark:bg-[#202020] dark:text-white">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Toaster richColors={true} position="top-right" />
          <div
            className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
