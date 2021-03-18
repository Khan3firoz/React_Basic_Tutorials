import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
             parent:'parents'
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName) {
        alert(`Hello ${this.state.parent} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
            // <div>
            //     <button onClick={this.greetParent}></button>
            // </div>
        )
    }
}

export default ParentComponent
