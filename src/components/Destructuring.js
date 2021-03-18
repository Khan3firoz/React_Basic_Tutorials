import React from 'react'

// const Destructuring=({name,heroName})=> {
//                         or
const Destructuring = props => {
    const {name,heroName}=props
    return (
        <div>
            <h1>
                Hello {name} a.k.n {heroName}
            </h1>
        </div>
    )
}
export default Destructuring