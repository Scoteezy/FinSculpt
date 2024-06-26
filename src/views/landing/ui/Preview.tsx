import { unica } from "@/src/shared/lib/fonts";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { GeometrySpacing } from "../../../shared/ui/GeometrySpacing";
const Preview = () => {
  const t = useTranslations("landing");

  return (
    <section className="mt-14 lg:mt-32 xl:mt-40 wrapper flex flex-col flex-center">
      <div className="flex w-full flex-col flex-center lg:flex-row-reverse lg:flex-between">
        <Image
          alt="expenses-tracker-preview"
          className="w-[358px] h-[358px]"
          height={358}
          src="/assets/images/expenses-placeholder.png"
          width={358}
        />
        <div className="max-w-96 mt-10 lg:mt-0">
          <h4 className={`${unica.className} h4-medium text-primary-400`}>
            {t("expenses")}
          </h4>
          <p className="p-regular-16 mt-5 lg:mt-10 text-primary-400">
            {t("expenses_text")}
          </p>
        </div>
      </div>
      <div className="flex w-full mt-14 lg:mt-10 xl:mt-14 flex-col flex-center lg:flex-row lg:flex-between">
        <Image
          alt="expenses-tracker-preview"
          height={300}
          src="/assets/images/income_placeholder.png"
          width={470}
        />
        <div className="max-w-96 mt-10 lg:mt-0">
          <h4 className={`${unica.className} h4-medium text-primary-400`}>
            {t("income")}
          </h4>
          <p className="p-regular-16 mt-5 lg:mt-10 lg:max-w-[358px]   text-primary-400">
            {t("income_text")}
          </p>
        </div>
      </div>
      <GeometrySpacing
        marginBottom="mb-10 lg:mb-28"
        marginTop=" mt-32 lg:mt-44"
        type="type-light"
      />
      <div className="w-full my-24">
        <h4 className={`${unica.className}  h4-medium text-primary-400`}>
          {t("crypto")}
        </h4>
        <div className="flex flex-col  md:flex-row md:justify-between md:items-start md:mt-10">
          <p className="p-regular-16 mt-10 md:mt-0 max-w-[600px] md:mr-5 xl:mr-0">
            {t("crypto_text")}
          </p>
          <p className="p-regular-16 mt-10 md:mt-0 max-w-[600px]">
            {t("crypto_text-2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Preview;
