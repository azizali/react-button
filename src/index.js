import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

function App(){
    return(
        <div>
            <Button value="Traditional Button" />
            <Button type="anchor" to="https://google.com" value="Anchor link" />
            <Button type="submit" value="Submit button" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))