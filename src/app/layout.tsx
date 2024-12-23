import type { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Nick Mine – Registration",
  description: "Create an account to get access to precious assets",
};

const RootLayout: FC<
  Readonly<{
    children: ReactNode;
  }>
> = ({ children }) => (
  <html lang="en">
    <body className={lato.variable}>{children}</body>
  </html>
);

export { metadata };

export default RootLayout;
