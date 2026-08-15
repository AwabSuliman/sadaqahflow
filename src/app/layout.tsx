import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zakat Distribution | Community Logistics Platform",
  description:
    "A secure operations platform for coordinating community food requests, volunteer drivers, and last-mile delivery.",
  openGraph: {
    title: "Zakat Distribution | Community Logistics Platform",
    description:
      "A secure operations platform for coordinating community food requests, volunteer drivers, and last-mile delivery.",
    siteName: "Zakat Distribution",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Zakat Distribution | Community Logistics Platform",
    description:
      "A secure operations platform for coordinating community food requests, volunteer drivers, and last-mile delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
