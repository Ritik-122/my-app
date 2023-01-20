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

    return(
        <Card  className='expenses'>
         <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {props.arrayi.map((e) => (
            <ExpenseItem
              title={e.title}
              amount={e.amount}
              date={e.date}
              
            />
          ))}
          </Card>

    )
}
export default Expenses