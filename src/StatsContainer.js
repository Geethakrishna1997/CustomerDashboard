import React,{useState} from 'react'
import StatsItem from './StatsItem'

const StatsContainer = (props)=>{
    const {customers,uniqueCustomers,ordersTotal}=props
    const ordersCount=customers.length
    
    return (
        <div>
            <StatsItem count={ordersCount} text='orders' />
            <StatsItem count={ordersTotal(customers)} text="Amount" />
            <StatsItem count={uniqueCustomers(customers).length} text="customers" />
        </div>
    )
}

export default StatsContainer