import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello I'm JSX</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id:'hello',className:'hello'}, React.createElement('h1', null, 'Hello I am without JSX'))
}
export default Hello