import Expenses from "./components/Expenses";
import './components/Expenses.css'

function App() {
  const expenses = [
    {
      title: "Smartphone",
      amount: 20000,
      date: new Date("1-7-2022"),
    },
    {
      title: "Books",
      amount: 1000,
      date: new Date("3-3-2019"),
    },
    {
      title: "Groceries",
      amount: 350,
      date: new Date("6-25-2024"),
    },
    {
      title: "Internet",
      amount: 2000,
      date: new Date("2-16-2024"),
    },
  ];
  return (
    <div className="App">
    <h1>Hello</h1>
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
