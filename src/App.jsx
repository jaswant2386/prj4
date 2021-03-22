import React from "react";
import Mytime, { Wtnow } from "./Mytime"
import Intro from "./Intro"


function App() {
    return (<>
        <Mytime /> 
        <div className="hi">
        <span> Hii Friends ...{Wtnow()}.!</span>
        </div>
        <Intro /> 
        
    </>
    )
};

export default App;
