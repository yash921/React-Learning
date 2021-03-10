import React, { Component } from 'react'


class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn: true
      }
    }
    
    render() {
        //4th Method 
        return this.state.isLogedIn && <div>Welcome Yash</div>

        //3rd Method
        // return  (
        //         this.state.isLogedIn ? (
        //         <div>Welcome Yash!</div> )
        //     : ( <div>Welcome guest!</div> )
        // )


        //2nd Methos
        // let message
        // if(this.state.isLogedIn){
        //     message = <div>Welcome Yash!!</div>
        // }else {
        //     message = <div>Welcome Guest!!</div>
        // }

        // return <div>{message}</div>


        //1st Method 
        // if (this.state.isLogedIn) {
        //     return (
        //         <div>
        //             Welcome Yash
        //         </div>
        //     )
        // }else {
        //     return (
        //         <div>
        //           Welcome Guest  
        //         </div>
        //     )
        // }
        
    }
}

export default UserGreeting
