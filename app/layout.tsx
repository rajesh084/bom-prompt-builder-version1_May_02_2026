import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajesh R G | Networking Solutions Specialist",
  description:
    "Enterprise networking and pre-sales portfolio for Rajesh R G, specializing in HPE Aruba, cybersecurity, cloud, and data protection.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
