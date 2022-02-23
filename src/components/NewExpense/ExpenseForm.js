import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData,handelFormRender }) => {

    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        date: "",
    });

    const changeHandler = (event) => {
        setExpense((prevState) => {
            return { ...prevState, [event.target.name]: event.target.value };
        });
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        let updatedExpense = {...expense, date: new Date(expense.date) };
        onSaveExpenseData(updatedExpense)
        setExpense({
            title: '',
            amount: '',
            date: ''
        })
        handelFormRender()
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense_control">
                    <label>Title: </label>
                    <input
                        value={expense.title}
                        type="text"
                        name="title"
                        onChange={changeHandler}
                    />
                </div>
                <div className="new-expense_control">
                    <label>Amount: </label>
                    <input
                        type="number"
                        value={expense.amount}
                        name="amount"
                        onChange={changeHandler}
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="new-expense_control">
                    <label>Date: </label>
                    <input
                        type="date"
                        name="date"
                        value={expense.date}
                        onChange={changeHandler}
                        min="2019-01-01"
                        max="2022-12-31"
                    />
                </div>
            </div>
            <div className="new-expense_actions">
                <button onClick={handelFormRender}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
