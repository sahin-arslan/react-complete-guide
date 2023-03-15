import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

import { LoginForm, ContactForm } from './components/Inheritance /FormTest';

export default function App() {
  const [expenseItems, setExpenseItems] = useState([
    {
      id: 1,
      title: 'Car Insrumca',
      amount: 34.34,
      date: new Date(2022, 10, 12),
    },
    {
      id: 2,
      title: 'Phome Bill',
      amount: 56.45,
      date: new Date(2022, 10, 31),
    },
    {
      id: 3,
      title: 'Market',
      amount: 234.43,
      date: new Date(2021, 10, 16),
    },
  ]);

  const addExpenseHandler = (expense) => {
    expense.id = expenseItems.splice(-1)[0].id + 1;

    setExpenseItems((previousExpenseItems) => {
      return [expense, ...previousExpenseItems];
    });
  };

  return (
    <div className="container">
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses data={expenseItems} />
    </div>
  );
  /*
  return React.createElement(
    'div',
    {},
    React.createElement(Expenses, { data: expenseItems })
  );
  */
}
