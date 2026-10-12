import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quality Kids Nursery & Primary School | Iganga, Uganda",
  description: "Iganga's Home of Quality Education - Light Purple & White. Admissions Open 2026.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}