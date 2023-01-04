import './Expenses.css'
import ExpenseItem from "./ExpenseItem.js";
import Card from '../UI/Card.js'

const Expenses=(props)=>{

    return(
        <Card  className='expenses'>

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