import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2024");
  const selectedYearHandler = (filteredYear) => {
    console.log(filteredYear);
    setFilteredYear(filteredYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    const expenseDate = new Date(expense.date) ;
    return expenseDate.getFullYear().toString() === filteredYear;
  });

  
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          filteredYear={filteredYear}
          selectedYearHandler={selectedYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
