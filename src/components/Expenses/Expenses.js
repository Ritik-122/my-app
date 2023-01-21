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

        {filteredExpensesArray.map((e) => (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
              
            />
          ))}
          </Card>

    )
}
export default Expenses