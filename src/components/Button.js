import React from 'react'

export default function Button ({
    type,
    to,
    value
}){
    if(type === 'anchor'){
        return <a href={to}>{value}</a>
    } else if(type === 'submit'){
        return <input type="submit" value={value} />
    } else {
        return <button>{value}</button>

    }
}