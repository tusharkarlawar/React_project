import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



const ExpenseItem = (props) => {
  //  fuction clickHandler() {} //
  const [amount, setAmount] = useState(props.amount);
  console.log('ExpenseItem evaluated by React')

  const clickHandler = () => {
    setAmount(100);

    console.log(amount);
   };
   
      


    
    
    return (
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          
          <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div className="expense-item__price">{props.location}</div>
               <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Amount to $100</button>
            
        </Card>

    );
}

export default ExpenseItem;