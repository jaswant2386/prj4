import React from "react";

const currentDt = new Date().toLocaleDateString();
const currenttm = new Date().toLocaleTimeString();
const tym = new Date().getHours();
let carry = " "

function Mytime() {

    return (
        <>
            <p className="tym"> Today is - {currentDt} - {currenttm} </p> </>

    )
};
export default Mytime;


function Wtnow() {
    if (tym < 12) {
        carry = "Good Morning";
        return carry;
    }

        if (tym > 12 && tym < 16) {
            carry = "Good Afternoon";
            return carry;
        }
    
            if (tym > 16 && tym < 20) {
                carry = "Good Evening";
                return carry;
            }
    
                else {
                    carry="Good Nigh Sweet Dream";
                    return carry;
                }
};
export {Wtnow};

