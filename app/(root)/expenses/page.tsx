import { Expenses } from "@/src/views/expenses";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FinSculpt | Expenses Page",
  description: "At this page you can track your expenses.",
  icons: {
    icon:  "/assets/images/logo.png",
  },
};
const ExpensesPage = () => {
  return (
    <Expenses/>
  );
};

export default ExpensesPage;