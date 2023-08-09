// import React from "react";
// function Practice(){
//     return(
//         <div>
//             <h1>Siva Koteswara Rao</h1>
//         </div>
//     )
// }
// export default Practice;

// import { Component } from "react";
// class Counter extends Component {
//     handleClick = () => {
//         console.log(this)  // MyComponent {...}
//     }
//     render() {
//         return <button onClick={this.handleClick}>Click Me</button>
//     }
// }
// export default Counter;

// import { Component } from "react";
// class Count extends Component {
//     state = { Count: 9912762975 }
//     render() {
//         const { Count } = this.state;
//         return <p style={{ fontSize: "900%", border: "2px solid green", backgroundColor: "yellow" }}>{Count}</p>
//     }
// }
// export default Count;

// import React, { Component } from 'react'

// export class Counter extends Component {
//     state={
//         count:0,
//       }

//       increment=()=>{
//         this.setState({ count: this.state.count + 1 });
//       }

//       Restart=()=>{
//         this.setState({ count: this.state.count = 0});
//       }

//       decrement=()=>{
//         this.setState({ count: this.state.count - 1 });
//       }

//       render() {
//         return (
//           <div>
//             <span><button onClick={this.increment}>+</button></span>


//             <span><button onClick={this.Restart}>Restart</button></span>

//           <span>{this.state.count}</span>
//           <span><button onClick={this.decrement}>-</button></span>
//           </div>


//         )
//       }
// }

// export default Counter



import { Component } from "react"

import "./index.css"

class Counter extends Component {
    state = { count: 0 }
    onIncrement = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

 
    
    render() {
        const { count } = this.state
        return (
            <div className="container">
                <h1 className="count">Count {count}</h1>
                <button className="button" onClick={this.onIncrement}>
                    Increase
                </button> 

                <button className="button" onClick={this.Restart}>
                   Restart
                </button>
                <button className="button" onClick={this.onDecrement}>
                    Decrease
                </button>
            </div>
        )
    }
}

export default Counter



// import { Component } from "react";

// class Counter1 extends Component {
//     state = { Count: 0 }
//     onIncrement = () => {
//         this.setState((prevState) => ({ count: prevState.count + 1 }))
//     }
//     render() {
//         const { Count } = this.state
//         return (
//             <div className="Container m-5 text-center">
//                 <p style={{ fontSize: "180%", fontWeight: "bold" }}>The Button has been Clicked</p>
//                 <p style={{ fontSize: "180%", fontWeight: "bold" }}><span style={{ fontSize: "250%", color: "red" }}>{Count}</span>Times</p>
//                 <button className="button" onClick={this.onIncrement}> Increase
//                 </button>

//             </div>
//         )
//     }
// }
// export default Counter1;
