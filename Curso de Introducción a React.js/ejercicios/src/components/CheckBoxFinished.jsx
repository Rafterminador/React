import React from 'react'
import checkBoxFinished from "../assets/images/check-box-finished.png"
const CheckBoxFinished = (props) => {
    return (
        <button onClick={props.onClick}>
            <img src={checkBoxFinished} alt="Check Box" />
        </button>
    )
}

export { CheckBoxFinished }