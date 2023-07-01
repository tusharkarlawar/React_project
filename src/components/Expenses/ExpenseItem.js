import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //  fuction clickHandler() {} //
    const clickHandler = () => {
        console.log('Clicked!!!');
    };
    const clickDelete = () => {
      
      };
      


    
    
    return (
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          
          <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div className="expense-item__price">{props.location}</div>
               <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={clickDelete}>Delete Expenses</button>
        </Card>

    );
}

export default ExpenseItem;