import React, { useState, useContext, useLayoutEffect } from 'react'
import checkBoxFinished from "../assets/images/check-box-finished.png"
import checkBoxEmpty from "../assets/images/check-box-empty.png"
import { PinContext } from "../pages/TaskList"

const CheckBox = ({ props, id }) => {
    const [isCompleted, setIsCompleted] = useState("")
    const pinContext = useContext(PinContext);
    function handleCheckBox() {
        if (isCompleted === checkBoxFinished) {
            setIsCompleted(checkBoxEmpty)
        } else {
            setIsCompleted(checkBoxFinished)
        }
        pinContext.taskCompleted(id)
    }
    useLayoutEffect(() => {
        if (props === true) {
            setIsCompleted(checkBoxFinished)
        } else {
            setIsCompleted(checkBoxEmpty)
        }
    }, [])
    return (
        <button onClick={handleCheckBox}><img src={isCompleted} alt="Check Box" /> </button>
    )
}

export { CheckBox } 