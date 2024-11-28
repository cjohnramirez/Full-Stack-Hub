import { useState } from "react";

export function Textbox() {

    const [text, setText] = useState("")

    function handleEvent(e) {
        setText(e.target.value)
        console.log("The text has just changed!")
        console.log(e)
    }

    return (
        <>
            <input onChange={(e) => handleEvent(e)}></input>
            <p>{text}</p>
        </>
    )   
}