import React from "react";

class simple extends React.Component{
    work(){
        alert("Good Work");
    }
    render(){
        return(
            <button onClick={this.work}>Do Some Work!</button>
        )
    }
}
export default simple;
