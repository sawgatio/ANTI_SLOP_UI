import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anti-Slop UI Generator",
  description: "Constraint-led interface generation and sandbox testing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
