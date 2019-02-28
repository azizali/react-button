import './button.css'
import React from 'react'

export default  function Button (props){
    if(props.type === 'anchor'){
        return <a className="btn btn-link" href={props.to}>{props.value}</a>
    } else if(props.type === 'submit'){
        return <input className="btn btn-dark" type="submit" value={props.value} />
    } else {
        return <button className="btn btn-info">{props.value}</button>

    }
}