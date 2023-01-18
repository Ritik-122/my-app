import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from './ExpenseDetails.js';
import Card from '../UI/Card.js'
import React,{useState} from 'react'

const ExpenseItem=(props)=> {

  const [title,setTitle] = useState(props.title)
  const [exp,setExp]= useState(props.amount)

  

  const clickHandler=()=>{
    setTitle('Updated!')
    
  }
  const clickHandler2=()=>{
     
    setExp('$100')

  }
   
   return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={exp} />
      <button onClick={clickHandler}>Change</button>
      <button onClick={clickHandler2}>Expens</button>
      </Card>
  );
}

export default ExpenseItem;
