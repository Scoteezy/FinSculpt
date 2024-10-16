import { Expense,ExpenseWithTags } from "@/src/entities/expense";
const ExpensesList = () => {
  const mock:ExpenseWithTags[] = [{ 
    id:"1",
    title: "Expense 1",
    userId: "s",
    amount: 500,
    date: new Date(2024, 3, 30),
    currency: "rub",
    description : "Description",
    tags: [{
      id:"sd",
      name:"food",
      userId:"s"
    }, {
      id:"sd",
      name:"game",
      userId:"s"
    }]
  },
  { 
    id:"2",
    userId: "s",
    title: "Expense 2",
    amount: 300,
    currency: "rub",
    date: new Date(2024, 3, 28),
    description : "",
  },
  { 
    id:"3",
    userId: "s",
    title: "Expense 3",
    amount: 300,
    currency: "rub",
    date: new Date(2024, 3, 28),
    description : "",
  },
  { 
    id:"4",
    userId: "s",
    title: "Expense 3",
    amount: 300,
    currency: "rub",
    date: new Date(2024, 3, 28),
    description : "",
    tags: [{
      id:"sd",
      name:"food",
      userId:"s"
    }, {
      id:"sd",
      name:"game",
      userId:"s"
    }]
  }
  ];

  return (
    <div className="w-full flex flex-col gap-5">
      {mock.map((expense) => (
        <Expense {...expense}
          key={expense.id}/>
      ))}
    </div>
  );
};

export default ExpensesList;