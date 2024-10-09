import React from "react";

function Child(props){

    return (
        <React.Fragment>
        <h1>This is a child component</h1>
        <h1>{props.data}</h1>
        
        </React.Fragment>
    )
}

export default Child;