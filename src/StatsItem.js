import React,{useState} from 'react'

const StatsItem =(props) =>{
    const {count,text} = props
    return (
        <div>
            <h1>{count}</h1>
            <h3>{text}</h3>
        </div>
    ) 
}

export default StatsItem