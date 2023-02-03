import './NewExpense.css'
import ExpenseForm from './ExpenseForm.js';
import { useState } from 'react';


const NewExpense = (props) => {

  const[isEditing,setEditing]=useState(false)

  const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setEditing(false)

  }

  const startEditinghandler=()=>{
    setEditing(true)
  }
  const stopEditinghandler=()=>{
    setEditing(false)
  }
  

  return (
    <div className='new-expense'>
  {!isEditing && <button onClick={startEditinghandler}>Add New Expense</button>}
   {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditinghandler} />}
      
    </div>
  );
};
export default NewExpense;
