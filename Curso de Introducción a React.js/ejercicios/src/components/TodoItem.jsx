import React from 'react'
import { CheckBox } from "../components/CheckBox"
import { Card } from "../components/Card"
const TodoItem = (props) => {
    return (
        <li className='grid grid-cols-8 gap-4'>
            <div>
                <CheckBox props={props.data.completed} />
            </div>
            <div className="col-span-7 card">
                <Card props={props.data} />
            </div>
        </li>
    )
}
export { TodoItem }