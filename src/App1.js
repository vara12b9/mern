import React from "react";

import Parent from "./components/functional Components/props/parent ot child/Parent"
// import Parent from "./components/functional Components/props1/parent to child/Parent"
function hello(){
    return <React.Fragment>
        {/* <h1> hello This is from App1</h1>
    <h2> this is next return </h2>
    <X/>
    <Y/> */}
    {/* <Jsx/> */}
    {/* <Child/> */}
    <h1>This is App (Root component)</h1>
    <Parent/>
    </React.Fragment> 
}

export default hello;