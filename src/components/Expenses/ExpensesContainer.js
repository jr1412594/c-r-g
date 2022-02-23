import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const ExpensesContainer = ({ expenses }) => {

    const [year, setYear] = useState('2019');

    const displayExpenses = () => {
        return expenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
        });
    };

    const onSelectedYear = (selectedYear) => {
        setYear(selectedYear)
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                onSelectedYear={onSelectedYear}
                selected={year}
                expenses={expenses}
            />
            {displayExpenses()}
        </Card>
    );
};

export default ExpensesContainer;
