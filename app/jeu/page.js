"use client"
import { useState,  useEffect } from "react"

const jeu = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number+1)
    }

    const dincrement = () => {
        setNumber(number-1)
    }

    useEffect(() => {
        console.log('number has changed')
    
    }, [number])

    return (
        <>
        <div>{number}</div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => dicrement()}>dicrement</button>
        </>
    )

}

export default jeu