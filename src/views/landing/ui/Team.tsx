import { unica } from "@/src/shared/lib/fonts";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Team = () => {
  const t =useTranslations("landing");

  return (
    <section className="wrapper py-40 flex-center">
      <div className="flex flex-col flex-center">
        <Image
          alt="denis-avatar"
          className="rounded-full grayscale ml-1"
          height={80}
          src="/assets/images/denis-avatar.jpg"
          width={80}
        />
        <p
          className={`${unica.className} p-regular-20 text-center text-black mt-5 `}
        >
          {t("denis")}
        </p>
        <p className="p-regular-16 text-center text-primary-400 mt-2">
          {t("dev_grade")}
        </p>
      </div>
    </section>
  );
};

export default Team;
