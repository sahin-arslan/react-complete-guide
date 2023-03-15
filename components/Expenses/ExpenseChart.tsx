import * as React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
  const monthChartArray = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 0 },
    { name: 'Mar', value: 0 },
    { name: 'Apr', value: 0 },
    { name: 'May', value: 0 },
    { name: 'Jun', value: 0 },
    { name: 'Jul', value: 0 },
    { name: 'Aug', value: 0 },
    { name: 'Sep', value: 0 },
    { name: 'Oct', value: 0 },
    { name: 'Nov', value: 0 },
    { name: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMount = expense.date.getMonth();
    monthChartArray[expenseMount].value += Number(expense.amount);
  }

  return (
    <div>
      <Chart dataPoints={monthChartArray} />
    </div>
  );
};

export default ExpenseChart;
