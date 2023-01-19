import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
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

  let handleClick=(e)=>{
    
    console.log(e.target.title.value)
    console.log(e.target.amount.value)
    console.log(e.target.date.value);


  }


  return (
    <form onSubmit={handleClick}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} name='title' />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={amountHandler} name='amount'/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateHandler}
            name='date'
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
