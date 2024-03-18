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
    <>
      <h1 className="h2-regular">Expenses</h1>
    </>
  );
};

export default ExpensesPage;