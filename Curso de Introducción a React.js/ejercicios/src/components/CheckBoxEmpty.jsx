import React from 'react'
import checkBoxEmpty from "../assets/images/check-box-empty.png"
const CheckBoxEmpty = (props) => {
    return (
        <button onClick={props.onClick}>
            <img src={checkBoxEmpty} alt="Check Box" />
        </button>
    )
}

export { CheckBoxEmpty } 
