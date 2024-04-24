"use client";

import { usePathname, useRouter } from "@/src/navigation";
import { Button } from "@/src/shared/ui";
import ISO6391 from "iso-639-1";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher (){
  const searchParams = useSearchParams();
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = () => {
    router.replace(`${pathName}?${searchParams.toString()}`, { locale: locale === "ru" ? "en" : "ru" });
  };

  return (
    <Button className="text-primary-500 transition-all duration-500 hover:text-[#c8b1e4] train bg-[#c8b1e4]"
      onClick={handleChange}>
      <p>{ISO6391.getNativeName(locale)}</p>
    </Button>
  );
};