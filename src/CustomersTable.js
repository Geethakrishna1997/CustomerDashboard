import React from 'react'

export default function CustomersTable(props){
    const {customers,showDetails} = props
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Show</th>    
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer)=>{
                        return (
                            <tr key={customer.Phone}>
                                <td>{customer.Name}</td>
                                <td>{customer.Phone}</td>
                                <td><button onClick={() =>{
                                    showDetails(customer)
                                }}>Show</button></td>
                            </tr>
                        )
                    })}            
                </tbody>
            </table>
        </div>
    )
}