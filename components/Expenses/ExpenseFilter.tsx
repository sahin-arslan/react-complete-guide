import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const years = Array.from({ length: 10 }, (value, index) => 2020 + index);

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={props.onChangeFilter}>
          {years.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
