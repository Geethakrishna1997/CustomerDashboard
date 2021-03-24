import React from 'react'
import Chart from 'react-google-charts'

export default function OrdersChart(props){
    const {data} = props
    const chartData = [['No of Orders','Customers order']] 

    for(const ele in data){
        chartData.push([ele,data[ele]])
    }

    return (
        <div>
            <Chart
  width={'500px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={chartData}
  options={{
    title: 'Order Distribution',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>
    )
}