import { useState, useEffect } from "react"

export function Button() {

    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState(0)

    useEffect(() => {
        console.log("Page has just been rendered")
    }, [])

    useEffect(() => {
        console.log("Count has just changed")
        setFilter("")
    }, [count])

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                <p>{count}{filter}</p>
            </button>
        </>
        
    )
}