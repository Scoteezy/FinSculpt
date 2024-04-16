import { Expense } from "@/src/entities/expense";
import { ExpenseType } from "@/src/shared/model/types";

const ExpensesList = () => {
  const mock:ExpenseType[] = [{ 
    id:"1",
    title: "Expense 1",
    amount: 500,
    date: new Date(2024, 3, 30),
    description : "Description",
    tags: ["Food", "Fun"]
  },
  { 
    id:"2",
    title: "Expense 2",
    amount: 300,
    date: new Date(2024, 3, 28),
    description : "",
    tags: ["Health", "Doctor"]
  },
  { 
    id:"3",
    title: "Expense 3",
    amount: 300,
    date: new Date(2024, 3, 28),
    description : "",
    tags: ["Health", "Doctor"]
  }
  ];

  return (
    <div className="w-full grid grid-cols-2 gap-5">
      {mock.map((expense) => (
        <Expense {...expense}
          key={expense.id}/>
      ))}
    </div>
  );
};

export default ExpensesList;