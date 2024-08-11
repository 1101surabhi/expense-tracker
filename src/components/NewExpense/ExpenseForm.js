import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // console.log(e.target.value );
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // console.log(e.target.value );
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
    // console.log(e.target.value );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseItem = {
      title: title,
      amount: amount,
      date: date,
    };
    props.onSaveExpenseData(expenseItem);
    setTitle("");
    setAmount("");
    setDate("");
    props.formVisibility(false);
  };

  const cancelFormHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setAmount("");
    setDate("");
    props.formVisibility(false);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" onChange={titleChangeHandler} value={title} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              min="1-1-2020"
              max="31-12-2024"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelFormHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
