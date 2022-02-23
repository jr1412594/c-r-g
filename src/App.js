import { useState } from "react";
import ExpensesContainer from "./components/Expenses/ExpensesContainer";
import NewExpense from "./components/NewExpense/NexExpense";

import { start as DUMMY_EXPENSES } from "./data/InitialState";

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpense = (expenseToAdd) => {
        setExpenses((prevState) => {
            return [expenseToAdd,...prevState];
        });
    };

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Expense Report</h2>
            <NewExpense addExpense={addExpense} />
            <ExpensesContainer expenses={expenses} />
        </div>
    );
};

export default App;
