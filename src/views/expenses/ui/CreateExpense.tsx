import { unica } from "@/src/shared/lib/fonts";
import { Input, Window } from "@/src/shared/ui";
const CreateExpense = () => {
  return (
    <Window styles='h-[95vh] mr-5 pt-8 px-5'>
      <h2 className={` h2-regular ${unica.className} text-black dark:text-primaryDarkTheme-400 `}>CREATE EXPENSE</h2>
      <div className="flex flex-col">
        <Input/>
      </div>
    </Window>
  );
};

export default CreateExpense;