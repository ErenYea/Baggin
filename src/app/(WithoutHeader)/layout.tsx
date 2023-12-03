import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baggins",
  description: "Entertainment and Event Production",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
