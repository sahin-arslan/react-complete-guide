import * as React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

function ExpenseList(props) {
  if (props.data.length === 0) {
    return <p className="expense-List__fallback">No expense item found.</p>;
  }

  if (props.data.length > 0) {
    return (
      <p className="expense-list">
        {props.data.map((expense) => (
          <ExpenseItem key={expense.id} data={expense} />
        ))}
      </p>
    );
  }
}

export default ExpenseList;
