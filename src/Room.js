import { useState } from "react";


export default function Room() {

    const [isLit, setLit] = useState(true)
    const background = isLit ? "room bright" : "room dark"
    return <div className={background}>

        <h3 align="center" color="#e4e4e4">Room is {isLit ? "Bright" : "Dark"}</h3>
        <button  onClick = {()=>{ setLit(!isLit)}}>{isLit ? "Make Dark" : "Make Bright"}</button>
    </div>;
}