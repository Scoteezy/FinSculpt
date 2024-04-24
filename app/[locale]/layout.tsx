
import { martian } from "@/src/shared/lib/fonts";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";

export const metadata: Metadata = {
  title: "FinSculpt",
  description: "FinSculpt is a platform for sculpting your finances.",
  icons: {
    icon:  "/assets/images/logo.png",
  },
};
export default async function  RootLayout ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  let messages;

  try {
    console.log(locale);
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale}
      messages={messages}>
      <ClerkProvider>
        <html lang={locale}>
          <body className={martian.className}>
       
            {children}
          </body>
        </html>
      </ClerkProvider>
    </NextIntlClientProvider>
   
   
  );
}



