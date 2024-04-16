
import { martian } from "@/src/shared/lib/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "FinSculpt",
  description: "FinSculpt is a platform for sculpting your finances.",
  icons: {
    icon:  "/assets/images/logo.png",
  },
};
export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={martian.className}>{children}</body>
      </html>
    </ClerkProvider>
   
   
  );
}



