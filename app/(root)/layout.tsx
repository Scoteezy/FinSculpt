import { Navigation } from "@/src/widgets/navigation";
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
    <div className="flex  bg-white md:h-screen dark:bg-secondaryDarkTheme-500">
      <Navigation />
      <main className="flex-1 my-auto">{children}</main>
    </div>
  );
}