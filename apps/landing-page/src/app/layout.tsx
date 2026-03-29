import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JotaiProvider } from "@/providers/JotaiProvider";

export const metadata: Metadata = {
  title: "My Landing Page",
  description: "Landing page with todo list powered by Jotai",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fff" }}>
        <JotaiProvider>{children}</JotaiProvider>
      </body>
    </html>
  );
}
