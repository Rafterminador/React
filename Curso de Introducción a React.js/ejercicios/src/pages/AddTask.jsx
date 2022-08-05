import React from 'react'
import calendar from "../assets/images/calendar.png"
import clock from "../assets/images/clock.png"
import note from "../assets/images/note.png"
import simpleAdd from "../assets/images/simple-Add.png"
const AddTask = () => {
    return (
        <>
            <div className='grid grid-cols-2 mt-10 mb-8'>
                <div className='flex'>
                    <img src={calendar} alt="date" className='icons mr-4' />
                    <input placeholder='Set Date' className='input-task'></input>
                </div>
                <div className='flex'>
                    <img src={clock} alt="time" className='icons mr-4' />
                    <input placeholder='Set Time' className='input-task'></input>
                </div>
            </div>
            <div className='flex mb-8'>
                <img src={simpleAdd} alt="add" className='icons mr-4' />
                <input placeholder='Add a subtask' className='input-task'></input>
            </div>
            <div className='flex'>
                <img src={note} alt="notes" className='icons mr-4' />
                <input placeholder='Add a note' className='input-task'></input>
            </div>
        </>
    )
}

export { AddTask } 