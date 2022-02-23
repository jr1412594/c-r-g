import "./ExpensesFilter.css";

const ExpensesFilter = ({ expenses, onSelectedYear, selected }) => {
    const displayDate = () => {
        let years = new Set([
            ...expenses.map((expenses) => expenses.date.getFullYear()),
        ]);
        return [...years].sort((a,b) => a - b).map((year) => {
            return (
                <option key={year} value={year}>
                    {year}
                </option>
            );
        });
    };

    const handleChange = (event) => {
        onSelectedYear(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter_control">
                <label>Filter by year: </label>
                <select value={selected} onChange={handleChange}>
                    {displayDate()}
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
