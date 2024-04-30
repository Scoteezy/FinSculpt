import { LanguageSwitcher } from "@/src/features/language";

const LocaleButton = () => {
  return (
    <div className="fixed right-5 bottom-5">
      <LanguageSwitcher />
    </div>
  );
};

export default LocaleButton;