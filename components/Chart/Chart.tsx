import * as React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const expenseValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxBarValue = Math.max(...expenseValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.name}
          value={dataPoint.value}
          maxValue={maxBarValue}
          label={dataPoint.name}
        />
      ))}
    </div>
  );
}

export default Chart;
