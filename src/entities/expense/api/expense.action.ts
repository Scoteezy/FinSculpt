
"use server";
import { db, getServerAuthSession } from "@/src/shared/lib/server";
import { Expense } from "@prisma/client";

export const createExpense = async (expenses: Expense[]) => {
  const session = await getServerAuthSession();

  if(!session){
    return;
  }
  return await db.expense.createMany({data:expenses});
};