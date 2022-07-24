import React, { useState, useEffect } from 'react'
import pinned from "../assets/images/pinned.png"
import notPinned from "../assets/images/not-pinned.png"

const Pin = ({ props }) => {
    const [isPinned, setIsPinned] = useState("")
    function handlePin() {
        if (isPinned === pinned) {
            setIsPinned(notPinned)
        } else {
            setIsPinned(pinned)
        }
    }
    useEffect(() => {
        if (props === true) {
            setIsPinned(pinned)
        } else {
            setIsPinned(notPinned)
        }
    }, [])
    return (
        <button onClick={handlePin}><img src={isPinned} alt="Check Box" /> </button>
    )
}

export { Pin }