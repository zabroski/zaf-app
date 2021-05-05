import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnterdDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value)

    };

    const dateChangeHandler = (event) => {
        setEnterdDate(event.target.value)  
    };
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData ={
            title:enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)     
    };
    console.log(expenseData)
    props.onSaveExpenseData()
    setEnteredTitle('');
    setEnteredAmount('');
    setEnterdDate('');
}

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler} 
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.1"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-30"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
    )
};

export default ExpenseForm;