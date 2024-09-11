import { formatDate } from "@/src/shared/lib/utils";
import {EditIcon, TrashIcon } from "@/src/shared/ui";
import { ExpenseWithTags } from "../model";
import { Tag } from '@/src/entities/tag'

const Expense = (expense : ExpenseWithTags) => {
  console.log(expense)
  return (
    <div className="flex flex-col p-3 gap-2 w-full bg-primary-400/20 dark:bg-primaryDarkTheme-400/40 rounded-lg drop-shadow-xl hover:opacity-60 transition-all duration-300 cursor-pointer">
      <div className="flex-between ">
      <p className="p-medium-24 ">{expense.title}</p>
        <p>{expense.amount}  ₽</p>
      </div>
      {/* <div className="flex-between">
        <p> {formatDate(expense.date.toISOString())}</p>
        <div className="flex gap-2">
          <button className="p-1 m-0 hover:ring-1 rounded-md transition-all duration-500 ring-[#f75f5f]">
            <TrashIcon height={24}
              width={24} />
          </button>
          <button className="p-1 m-0 hover:ring-1 rounded-md transition-all duration-500 ring-[#2f95dc]">
            <EditIcon height={24}
              width={24}/>
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Expense;