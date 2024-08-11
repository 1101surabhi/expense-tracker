import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const onSaveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id : Math.random().toString()
    }
    props.onAddExpense(expenseData) ;
  }

  const setVisibilityHandler = () => {
    setIsFormVisible(true);
  };

  return (
    <div className='new-expense'>
        {!isFormVisible && <button onClick={setVisibilityHandler}>Add New Expense</button>}
        {isFormVisible && <ExpenseForm onSaveExpenseData={onSaveExpenseData} formVisibility={setIsFormVisible} />}
    </div>
  )
}

export default NewExpense