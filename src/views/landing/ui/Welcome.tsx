import { unica } from "@/src/shared/lib/fonts";
import { useTranslations } from "next-intl";
const Welcome = () => {
  const t = useTranslations("landing");

  return (
    <section className="wrapper mt-14 lg:mt-20 xl:mt-24">
      <h2 className={`${unica.className} h2-regular text-primary-500`}>
        {t("welcome")}
      </h2>
      <h4 className="h4-medium max-w-[600px] mt-10">
        {t("welcome_text")}
      </h4>
    </section>
  );
};

export default Welcome;
