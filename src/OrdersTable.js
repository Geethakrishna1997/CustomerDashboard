import React from 'react'

export default function OrdersTable(props){
    const {data} = props
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No. of Orders</th>
                        <th>Count of customers</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((ele,i)=>{
                        return (
                            <tr key={i}>
                                <td>{ele}</td>
                                <td>{data[ele]}</td>
                            </tr>
                        )
                    })}                      
                </tbody>
            </table>
        </div>
    )
}