import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, work } = this.props // Destructuring props
        // Simalarly you acn also destructure state
        // const {state1,state2}=this.state
        return <h1>Hi I'm from class Component {name} and work id {work}</h1>
    }
}
export default Welcome