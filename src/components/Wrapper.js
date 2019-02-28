import React from 'react'

export default function ({ showHeader, children }){
    return (
        <div className="bg-dark">
            { showHeader && 'hi how are you' }
            {children}
        </div>
    )
}