import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("landing");

  return (
    <footer className="wrapper mt-20 lg:mt-20 flex flex-col">
      <div className="flex flex-col flex-center mt-20 lg:mt-52">
        <p className="p-regular-16 text-primary-400 text-center">
          {t("reserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
