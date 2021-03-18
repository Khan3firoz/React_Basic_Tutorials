import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHAndler() {
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHAndler}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
