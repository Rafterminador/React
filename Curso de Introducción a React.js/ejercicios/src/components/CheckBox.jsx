import React, { useState, useEffect } from 'react'
import checkBoxFinished from "../assets/images/check-box-finished.png"
import checkBoxEmpty from "../assets/images/check-box-empty.png"

const CheckBox = ({ props }) => {
    const [isCompleted, setIsCompleted] = useState("")
    function handleCheckBox() {
        if (isCompleted === checkBoxFinished) {
            setIsCompleted(checkBoxEmpty)
        } else {
            setIsCompleted(checkBoxFinished)
        }
    }
    useEffect(() => {
        if (props === true) {
            setIsCompleted(checkBoxFinished)
        } else {
            setIsCompleted(checkBoxEmpty)
        }
    }, [])
    return (
        <div>
            <button onClick={handleCheckBox}><img src={isCompleted} alt="Check Box" /> </button>
        </div>
    )
}

export { CheckBox } 