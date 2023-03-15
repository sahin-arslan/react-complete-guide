import * as React from 'react';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './../../style.css';

function ExpenseItem(props) {
  let title1 = props.data.title;

  const [title, setTitle] = useState(props.data.title);

  const clickHangdler = () => {
    console.log('Clicked button', (Math.random() * 10).toFixed(0));
    props.data.title = title + ' Test ';
    setTitle('Updated !');
    console.log(props.data.title);
  };

  return (
    <Card className="cardContainer">
      <ExpenseDate date={props.data.date} />
      <div className="expenseCard-description">
        <h2>{title}</h2>
      </div>
      <div className="amount">${props.data.amount}</div>
      {false && <button onClick={clickHangdler}>Change Title</button>}
    </Card>
  );
}
export default ExpenseItem;
