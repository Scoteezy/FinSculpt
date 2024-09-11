import { Expense, Tag } from "@prisma/client";

export interface ExpenseWithTags extends Expense {
 tags?: Tag[]
}