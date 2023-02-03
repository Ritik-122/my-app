import './Expenses.css'

import Card from '../UI/Card.js'
import ExpensesFilter from './ExpensesFilter';
import React,{useState} from 'react'
import ExpensesList from './ExpensesList.js';

const Expenses=(props)=>{

  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesArray=props.arrayi.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear
  });

    return(
      <li>
        <Card  className='expenses'>
         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList item={filteredExpensesArray} />
          </Card>
          </li>
    )
}
export default Expenses