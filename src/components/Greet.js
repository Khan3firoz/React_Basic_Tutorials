import React from "react";
function Greet(props) {
    return (
        <div>
            <h1>
                Hello {props.name} and work {props.work}
            </h1>
            <p>{ props.children}</p>
        </div>
    )
}
// const Greet=()=><h1>Hello Firoz khan</h1>
export default Greet
// export const Greet=()=><h1>Hello Firoz khan</h1>