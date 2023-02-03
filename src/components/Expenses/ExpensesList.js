import  './ExpensesList.css'
import ExpenseItem from './ExpenseItem.js'

const ExpensesList=(props)=>{

    return(
        <ul className='expenses-list'>
        {props.item.length===0 && <h2 className='expenses-list__fallback'>No Expense Found.</h2>}

        {props.item.length>0 && props.item.map((e) => (
            <ExpenseItem
              key={e.id}
              title={e.title}
              amount={e.amount}
              date={e.date}
              
            />
          ))}
          {props.item.length===1 && <p>Only single Expense here. Please add more...</p> }
          </ul>

)}
export default ExpensesList