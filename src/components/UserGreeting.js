import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        return this.state.isLoggedIn &&<div>Welcome Firoz khan</div>
        // return (
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Firoz khan</div>
        //     ) : (
        //         <div>Welcome uest</div>
        //     )
        // )


        // let message
        // if (this.state.isLoggedIn) {
        //     message= <div>Welcome Firoz khan</div>
        // } else {
        //     message=<div>Welcome Guest</div>
        // }
        // return<div>{message}</div>
        // if (this.state.isLoggedIn) {
        //     return  <div>Welcome Firoz khan</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Firoz khan</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
