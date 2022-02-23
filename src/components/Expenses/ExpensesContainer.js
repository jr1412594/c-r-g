import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'

const ExpensesContainer = ({ expenses }) => {
    const [year, setYear] = useState("2019");

    const displayExpenses = () => {
        return expenses
            .map((expense) => {
                return <ExpenseItem key={expense.id} expense={expense} />;
            })
            .filter((expense) => {
                return expense.props.expense.date.getFullYear() === +year;
            });
    };

    const spentMoneyOrNot = () => { 
        return displayExpenses().length === 0
        ? <p className="expenses-list__fallback">No expenses to check</p>
        : displayExpenses()
    }

    const onSelectedYear = (selectedYear) => {
        setYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                onSelectedYear={onSelectedYear}
                selected={year}
                expenses={expenses}
            />
            {spentMoneyOrNot()}
        </Card>
    );
};

export default ExpensesContainer;
