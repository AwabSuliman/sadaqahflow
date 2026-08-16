import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Masjid Al Wasatiyyah Wal Itidaal",
  description: "Request a food delivery or apply to become a volunteer driver.",
  openGraph: {
    title: "Masjid Al Wasatiyyah Wal Itidaal",
    description: "Request a food delivery or apply to become a volunteer driver.",
    siteName: "Masjid Al Wasatiyyah Wal Itidaal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Masjid Al Wasatiyyah Wal Itidaal",
    description: "Request a food delivery or apply to become a volunteer driver.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
