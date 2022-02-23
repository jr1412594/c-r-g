
export default function ExpenseList({ displayExpenses }) {
    const notFound = (
        <p className="expenses-list__fallback">No expenses found!</p>
    );

    const spentMoneyOrNot = displayExpenses().length === 0 ? notFound : displayExpenses();

    return <div>{spentMoneyOrNot}</div>;
}
