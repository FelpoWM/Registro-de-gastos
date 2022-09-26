import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) => {


    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{props.Title}</h2>
            <div className="expense-item__price">${props.Amount}</div>
        </div>
        <button>change title</button>
    </Card>
    )
}

    

export default ExpenseItem;