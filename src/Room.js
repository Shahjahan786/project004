import { useState } from "react";


export default function Room() {

    const [isLit, setLit] = useState(true)
    let [count, setCounter] = useState(0)

    const background = isLit ? "room bright" : "room dark"
    return <div className={background}>

        <h3 align="center" color={isLit ? "#e4e4e4" : "#FFF" }>Room is {isLit ? "Bright" : "Dark"}</h3>
        <button  onClick = {()=>{ setLit(!isLit)}}>{isLit ? "Make Dark" : "Make Bright"}</button>
        <button  onClick = {()=>{ setCounter(++count)}}>Click Me {count > 0 ? "(" +count + " time clicked)" : ""}</button>
    </div>;
}