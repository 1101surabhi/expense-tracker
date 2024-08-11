import React from "react";
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  let expenseDate = new Date(props.date)
  var month = expenseDate.toLocaleString("default", { month: "long" });
  var year = expenseDate.getFullYear();
  var date = expenseDate.toLocaleString("default", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
};

export default ExpenseDate;
