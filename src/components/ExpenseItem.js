import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem({ expense }) {
    const { title, amount, date } = expense;

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">${amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
