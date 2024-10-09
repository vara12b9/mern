import React from "react";

function Jsx(){
    // var X='vara prasad'
    // var X=20
    // var X=true
    // var X={
    //     name:"vara prasad",
    //     age:22,
    //     city:"hyd"
    // }
    // var X=["varaprasad",22,"hyd",true,"hello",null,"hai",undefined,"bye"]
    var X= function(){
        // return {name:"vara"}
        return [1,2,3]
        
    }
    // A empty function will return undefined but it is not a printable value. So, it doesnot return any thing
    return(
        
        <React.Fragment>
            <h1>This is Jsx</h1>
            <h1> This is second JSX</h1>
            {React.createElement("h1",null,"This is a component from react ") } 
            {/* in the above we had written in { } beacuse it is a JS syntax anta we are writing in JSX */}
            {/* This is a time taking process for that we hae to use JSX syntax   */}
            {/* <h1>x:{X().name}</h1> */}
            <h1></h1>

            </React.Fragment>
    )
    
}

export {Jsx} 