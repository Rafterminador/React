import React from 'react'
import { CheckBoxEmpty } from "../components/CheckBoxEmpty"
import { CheckBoxFinished } from "../components/CheckBoxFinished"
import { CheckBox } from "../components/CheckBox"
const TodoItem = (props) => {
    return (
        <li>
            <div>
                <CheckBox props={props.data.completed} />
                {/* {props.data.completed === true ? < CheckBoxFinished /> : <CheckBoxEmpty />} */}
            </div>
        </li>
    )
}

export { TodoItem }