import React from 'react'
import OrdersTable from './OrdersTable'
import OrdersChart from './OrdersChart'

const OrdersContainer=(props)=>{
    const {customers,uniqueCustomers}=props
    
    const customerFrequency=()=>{
        const customersData=uniqueCustomers(customers)
        const frequencyObj={1:0,2:0,3:0,4:0,'5+':0}
        customersData.forEach(customer =>{
            const customerOrders=customers.filter(c=>{
                return c.Phone === customer.Phone
            })
            if(customerOrders.length >= 5){
                frequencyObj['5+']++
            }else{
                frequencyObj[customerOrders.length]++
            }
        })
        return frequencyObj
    }

    return (
        <div>
            <h2>Orders Distribution</h2>
            <OrdersTable data={customerFrequency()} />
            <OrdersChart data={customerFrequency()} />
        </div>
    )
}

export default OrdersContainer