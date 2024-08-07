'use client'
import { unica } from "@/src/shared/lib/fonts";
import { Button} from "@/src/shared/ui";
import { useTranslations } from "next-intl";
import { signIn,signOut, useSession} from "next-auth/react";
import Link from "next/link";

const Join = () => {
  const user = useSession().data?.user;
  const t = useTranslations("landing");

  return (
    <section className="wrapper flex-center flex-col">
      {user ? 
      (<>
        <h2 className={`${unica.className} h2-regular text-primary-400`}>
        {t("signed_in")}
      </h2>
      <p className="p-regular-16 max-w-[500px] text-center text-primary-400 mt-5">
        {t("signed_in_text")}
      </p>
      <Button className="mt-5 text-primary-500 transition-all duration-500 hover:text-[#c8b1e4] train bg-[#c8b1e4]">
        <Link href={`expenses`}>{t("signed_in_button")}</Link>
      </Button></>) 
        
        : 
        ( <>
          <h2 className={`${unica.className} h2-regular text-primary-400`}>
            {t("signed_out")}
          </h2>
          <p className="p-regular-16 max-w-[500px] text-center text-primary-400 mt-5">
            {t("signed_out_text")}
          </p>
          <Button className="mt-5 text-primary-500 transition-all duration-500 hover:text-[#c8b1e4] train bg-[#c8b1e4]" onClick={() =>
                  signIn("google", {
                    redirect: true,
                    callbackUrl: "/",
                  })}>
                {t("signed_out_button")}    
          </Button></>)
       
          }
    </section>
  );
};

export default Join;
