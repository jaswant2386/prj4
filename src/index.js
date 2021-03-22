import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App.jsx";
import Cdata from "./Cdata";
import Mycards from"./Mycards";

function WebD(val){
    return(
    <Mycards
        myimg={val.simg}
        myalt=" "
        mytitle={val.stitle}
        mytext={val.stext}
    />
    );
};

ReactDOM.render(<>
    <App />
    {Cdata.map(WebD)}
</>, document.getElementById('root'));




