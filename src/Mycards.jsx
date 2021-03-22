import React from "react"


function Mycards(props) {
    return (
        <>
        <div className="card">
            <img className="cardimg1" src= {props.myimg} alt={props.myalt}/>
                <div className="card-body">
                    <h2 className="card-title">{props.mytitle}</h2>
                    <p className="card-text">{props.mytext}</p>
                    <a href="https://developer.oracle.com/in/javascript/" className="btn btn-primary">Go Official Website</a>
                </div>
        </div>
    </>)
}



export default Mycards;