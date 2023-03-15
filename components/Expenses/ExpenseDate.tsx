import * as React from 'react';
import './ExpenseDate.css';
import appConfig from './../../appConfig';

function ExpenseDate(props) {
  const month = props.date.toLocaleString(appConfig.countyCode, {
    month: 'long',
  });
  const day = props.date.toLocaleString(appConfig.countyCode, {
    day: '2-digit',
  });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
