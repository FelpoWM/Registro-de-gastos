import React from 'react';
import './ExpenseItem.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('pt-BR', {month: 'long'});
    const day = props.date.toLocaleString('pt-BR', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{day}</div>
            <div classname="expense-date__day">{year}</div>
        </div>
    );
}
export default ExpenseDate;