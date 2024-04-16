import { formatDate } from "@/src/shared/lib/utils";
import { ExpenseType } from "@/src/shared/model/types";
import {EditIcon, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TrashIcon } from "@/src/shared/ui";

const Expense = (expense : ExpenseType) => {
  return (
    <div className="flex flex-col p-3 gap-2 w-full bg-primary-400/20 dark:bg-primaryDarkTheme-400/40 rounded-lg drop-shadow-xl">
      <div className="flex-between ">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>       
              <p className="p-medium-24 ">{expense.title}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{expense.description || "No description"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>       
              <p>{expense.amount}  ₽</p>

            </TooltipTrigger>
            <TooltipContent>
              <div className="flex gap-2">
                {expense.tags.map(tag=><p className="border-[1px] block border-black p-1 rounded-lg"
                  key={tag}>{tag}</p>)}
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex-between">
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
      </div>
    </div>
  );
};

export default Expense;