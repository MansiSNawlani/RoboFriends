import React from 'react'
import ReactDOM from 'react-dom'

function HelloFunctionComponent(props){
    return(
        <div>
            <p>Welcome From HelloFC {props.greetingFC}</p>
        </div>
    )
    
}

export default HelloFunctionComponent