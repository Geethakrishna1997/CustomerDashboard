import React,{useState} from 'react'
import CustomersTable from './CustomersTable'
import Search from './Search'

const CustomerContainer=(props)=>{
    const [term,setTerm]= useState('')
    const {customers,uniqueCustomers} = props
    const OnlyUniqueCustomers=uniqueCustomers(customers)

    const showDetails=(customer)=>{
        const customerOrders=customers.filter(c =>{
            return c.Phone === customer.Phone
        })
        alert(`
                Name - ${customer.Name},
                Order count - ${customerOrders.length}
        `)
    }

    const handleChange=(e)=>{
        const term=e.target.value
        setTerm(term)
    }

    const filteredUniqueCustomers=() =>{
        const res=OnlyUniqueCustomers.filter((c) =>{
            return c.Name.toLowerCase().includes(term) || c.Phone.toString().includes(term)
        })
        return res
    }

    return (
        <div>
            <h2>Listing Customers - {OnlyUniqueCustomers.length}</h2>
            <Search term={term} handleChange={handleChange} />
            <CustomersTable customers={filteredUniqueCustomers()} showDetails={showDetails} />
        </div>
    )
}

export default CustomerContainer