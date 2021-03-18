import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Prent Greeting</button> */}
            <button onClick={()=>props.greetHandler('child')}>Prent Greeting</button>
        </div>
    )
}

export default ChildComponent
