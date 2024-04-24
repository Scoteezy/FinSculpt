import ThemeProvider from "@/src/app/providers/ThemeProvider";
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
   
    <div className="flex flex-col lg:flex-row  bg-white md:h-screen dark:bg-secondaryDarkTheme-500">
      <ThemeProvider>
        <Navigation />
        <main className="flex-1 my-auto">{children}</main>
      </ThemeProvider>
    </div>
  );
}