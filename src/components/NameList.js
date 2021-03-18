import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Firoz', 'Akhlaque', 'Krishna','Firoz']
    const nameList = names.map((name, index) => <h2 key={index}> {index } {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
//     const person = [
//         {
//             id:1,
//             name:'Firoz khan',
//             age:23,
//             skill:'React'
//         },
//         {
//             id:2,
//             name:'Ashfaque',
//             age:25,
//             skill:'Data Science'
//         },
//         {
//             id:3,
//             name:'Akhlaque',
//             age:22,
//             skill:'Angular'
//         },
//         {
//             id:4,
//             name:'Sulatn khan',
//             age:23,
//             skill:'Angular'
//         }
//     ]
//     const personList = person.map(person => <Person key={person.id} person={person}/>)
//     return <div>{personList}</div>
}

export default NameList
