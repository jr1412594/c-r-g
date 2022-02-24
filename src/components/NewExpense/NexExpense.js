import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ addExpense }) => {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        addExpense(expenseData)
    }

    const handelFormRender = () => {
        setShowForm(!showForm)
    }

    const showFormOrAddExpense = showForm ? (
    <ExpenseForm onSaveExpenseData={saveExpenseData} handelFormRender={handelFormRender}/>
    ) : (
        <button onClick={handelFormRender}>Add New Expense</button>
    )

    return (
        <div className='new-expense'>
            {showFormOrAddExpense}
        </div>
    )
}

export default NewExpense;