import { Navigation } from "@/src/widgets";
import { Metadata } from "next";

export const metadata: Metadata = {
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
    <div className="flex h-screen ">
      <Navigation />
      <main className="flex-1 pt-8">{children}</main>
    </div>
  );
}