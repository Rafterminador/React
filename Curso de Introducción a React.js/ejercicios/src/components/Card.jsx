import React from 'react'
import { Pin } from "./Pin"
const Card = ({ props }) => {
    console.log(props)
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-8'>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className='col-span-4'>
                <div className='flex flex-col items-end'>
                    <Pin props={props.isPinned} />
                    <p>{props.isPinned}</p>
                    <p>{props.date}</p>
                    <p>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export { Card }