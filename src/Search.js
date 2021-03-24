import React from 'react'

export default function Search(props){
    const {term,handleChange} = props
    return (
        <div>
            <input type="text" value={term} onChange={handleChange} placeholder="search by Name or Phone" />
        </div>
    )
}