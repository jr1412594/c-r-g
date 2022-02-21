import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css';

export default function ExpensesContainer({ expenses }) {
    const displayExpenses = () => {
        return expenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
        });
    };

    return <Card className='expenses'>{displayExpenses()}</Card>;
}
