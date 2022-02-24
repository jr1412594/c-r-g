import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const ExpensesContainer = ({ expenses }) => {
    const [year, setYear] = useState("2019");

    const onSelectedYear = (selectedYear) => {
        setYear(selectedYear);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear() === +year;
    })

    const displayExpenses = filteredExpenses.map(expense => {
                return <ExpenseItem key={expense.id} expense={expense} />;
            });

    return (
        <Card className="expenses">
            <ExpensesFilter
                onSelectedYear={onSelectedYear}
                selected={year}
                expenses={expenses}
            />
            <ExpensesChart filteredExpenses={filteredExpenses}/>
            <ExpenseList displayExpenses={displayExpenses} />
        </Card>
    );
};

export default ExpensesContainer;
