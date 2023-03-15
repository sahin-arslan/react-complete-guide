import * as React from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = React.useState(
    new Date().getFullYear().toString()
  );

  /* React.useEffect(() => {
    setFilteredYear(props.data[0].date.getFullYear());
  });
*/
  const onChangeFilterHandler = (year) => {
    setFilteredYear(year.target.value);
  };

  const filteredExpens = props.data.filter((x) => {
    return x.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeFilter={onChangeFilterHandler}
      /> 
      <ExpenseChart expenses={filteredExpens} />
      <ExpenseList data={filteredExpens} />
    </div>
  );
}

export default Expenses;
