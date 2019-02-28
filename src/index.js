import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'
import Wrapper from './components/Wrapper'

function App(){
    const btnStyles = {
        backgroundColor: 'red',
        color: 'yellow'
    }
    return(
        <div>
            <h1 style={btnStyles}>
                This is the headline
            </h1>
            <Wrapper showHeader={false}>
                here this is plain
                <h1>I am header</h1>
                <Button value="Traditional Button" />
                <p>This is some info</p>
            </Wrapper>
            
            <Button
                type="anchor"
                to="https://google.com"
                value="Go to google"
            />
            <Button type="submit" value="Submit button" />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))