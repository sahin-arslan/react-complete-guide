import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveExpenseHandler = (expenseData) => {
    console.log('This is excellent!');
    props.addExpense(expenseData);
  };

  const [isShowExpenseForm, setIsShowExpenseForm] = useState(false);
  const onResetHandler = () => {
    setIsShowExpenseForm((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {isShowExpenseForm ? (
        <ExpenseForm
          onSaveExpense={onSaveExpenseHandler}
          onResetHandler={onResetHandler}
        />
      ) : (
        <div className="new-expense__actions">
          <button type="submit" onClick={onResetHandler}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
