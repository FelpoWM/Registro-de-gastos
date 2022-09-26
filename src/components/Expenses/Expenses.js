import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (Props) => {
    return (
    <Card className="expenses">
        <ExpenseItem
            title={Props.items[0].title} 
            amount={Props.items[0].amount} 
            date={Props.items[0].date}
        />
        <ExpenseItem
            title={Props.items[1].title} 
            amount={Props.items[1].amount} 
            date={Props.items[1].date}
        />
        <ExpenseItem
            title={Props.items[2].title} 
            amount={Props.items[2].amount} 
            date={Props.items[2].date}
        />
        <ExpenseItem
            title={Props.items[3].title} 
            amount={Props.items[3].amount} 
            date={Props.items[3].date}
        />
    </Card>

    )
}

export default Expenses;
