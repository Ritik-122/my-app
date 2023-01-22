import './Expenses.css'
import ExpenseItem from "./ExpenseItem.js";
import Card from '../UI/Card.js'
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react'

const Expenses=(props)=>{

  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesArray=props.arrayi.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  });

    return(
        <Card  className='expenses'>
         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpensesArray.length===0 && <p>No Expense Found.</p>}

        {filteredExpensesArray.length>0 && filteredExpensesArray.map((e) => (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
              
            />
          ))}
          {filteredExpensesArray.length===1 && <p>Only single Expense here. Please add more...</p> }
          </Card>

    )
}
export default Expenses