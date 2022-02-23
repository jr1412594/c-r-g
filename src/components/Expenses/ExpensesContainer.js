import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

import "./Expenses.css";

const ExpensesContainer = ({ expenses }) => {
    const [year, setYear] = useState("2019");

    const onSelectedYear = (selectedYear) => {
        setYear(selectedYear);
    };

    const displayExpenses = () => {
        return expenses
            .map((expense) => {
                return <ExpenseItem key={expense.id} expense={expense} />;
            })
            .filter((expense) => {
                return expense.props.expense.date.getFullYear() === +year;
            });
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                onSelectedYear={onSelectedYear}
                selected={year}
                expenses={expenses}
            />
            <ExpenseList displayExpenses={displayExpenses} />
        </Card>
    );
};

export default ExpensesContainer;
