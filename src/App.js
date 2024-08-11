import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id : "e1",
    title: "Smartphone",
    amount: 20000,
    date: new Date("1-7-2022"),
  },
  {
    id : "e2",
    title: "Books",
    amount: 1000,
    date: new Date("3-3-2019"),
  },
  {
    id : "e3",
    title: "Groceries",
    amount: 350,
    date: new Date("6-25-2024"),
  },
  {
    id : "e4",
    title: "Internet",
    amount: 2000,
    date: new Date("2-16-2024"),
  },
]

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses)

  const addExpenseHandler = (expense) => {
    // console.log(expense) ;
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
