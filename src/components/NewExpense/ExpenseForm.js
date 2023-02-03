import React, { useState } from "react";
import "./ExpenseForm.css";
// import AddExpenseButt from "./AddExpenseButt.js";


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  let titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  let amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  let dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  let handleClick = (e) => {
    e.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData)
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
  };

  

  

  return (
    <form onSubmit={handleClick}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
