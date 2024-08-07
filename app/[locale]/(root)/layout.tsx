import ThemeProvider from "@/src/app/providers/ThemeProvider";
import { getServerAuthSession } from "@/src/shared/lib/server/auth";
import { Navigation } from "@/src/widgets/navigation";
import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  icons: {
    icon:  "/assets/images/logo.png",
  },
};

export default async function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = (await getServerAuthSession())?.user
  if(!user){
    redirect('/')
  }
  return (
    <div className="flex flex-col lg:flex-row  bg-white md:h-screen dark:bg-secondaryDarkTheme-500">
      <ThemeProvider>
        <Navigation />
        <main className="flex-1 my-auto">{children}</main>
      </ThemeProvider>
    </div>
  );
}