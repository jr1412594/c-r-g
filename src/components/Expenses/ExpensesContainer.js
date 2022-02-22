import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

const ExpensesContainer = ({ expenses }) => {
    const displayExpenses = () => {
        return expenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} />;
        });
    };

    return <Card className='expenses'>{displayExpenses()}</Card>;
}

export default ExpensesContainer;