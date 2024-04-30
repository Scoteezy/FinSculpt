import { FilterExpense } from "@/src/features/expense";
import { unica } from "@/src/shared/lib/fonts";
import { Window } from "@/src/shared/ui";
import { ExpensesList } from "@/src/widgets/expenses";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Expenses = () => {
  const t = useTranslations("main");

  return (
    <section className="flex flex-col md:flex-row gap-5 mx-5">
      <Window styles='pt-8 h-[95vh] px-5 w-full mt-5 md:mt-0 md:w-1/2'>
        <div className="flex-between">
          <h2 className={` h2-regular ${unica.className} text-black dark:text-primaryDarkTheme-400 `}>{t("expenses")}</h2>

          <Link className="text-black hover:text-black/70 dark:text-primaryDarkTheme-400 dark:hover:text-primaryDarkTheme-500 transition-all duration-500"
            href="expenses/create">{t("create")}</Link>

        </div>
        <FilterExpense/>

        <ExpensesList/>
      </Window>
      <Window styles='w-full px-5 md:w-1/2 h-[95vh] pt-8'>
        <h2 className={`h2-regular ${unica.className} text-black dark:text-primaryDarkTheme-400`}>{t("analyses")}</h2>
      </Window>

    </section>
  );
};

export default Expenses;