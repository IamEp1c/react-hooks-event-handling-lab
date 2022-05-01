// Code Keypad Component Here
import React from "react";
// import { useState } from "react";


function KeyPad(){

    function handleChange(){
        console.log('Entering Password')
    }

    return (
        <input type="password" onChange={handleChange}/>
    )
}

export default KeyPad;