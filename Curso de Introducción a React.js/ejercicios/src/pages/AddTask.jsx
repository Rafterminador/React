import React, { useState } from 'react'
import note from "../assets/images/note.png"
import { DateIcon } from '../components/DateIcon'
import { ClockIcon } from '../components/ClockIcon'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { alpha } from '@material-ui/core/styles'
const AddTask = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
    };
    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className='grid grid-cols-2 mt-10 mb-8'>
                    <div className='flex mr-4'>
                        <KeyboardDatePicker
                            id="date-picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            keyboardIcon={<DateIcon />}
                            InputAdornmentProps={{ position: 'start' }}
                            InputProps={{
                                className: "input-task",
                                disableUnderline: true
                            }}
                        />
                    </div>
                    <div className='flex mr-4'>
                        <KeyboardTimePicker
                            id="date-picker"
                            value={selectedDate}
                            onChange={handleDateChange}
                            keyboardIcon={<ClockIcon />}
                            InputAdornmentProps={{ position: 'start' }}
                            InputProps={{
                                className: "input-task",
                                disableUnderline: true
                            }}
                        />
                    </div>
                </div>
                <div className=' mb-8'>
                    <input placeholder='Add a subtask' className='input-task input-task-add'></input>
                </div>
                <input placeholder='Add a note' className='input-task input-task-note'></input>
            </MuiPickersUtilsProvider>
        </>
    )
}

export { AddTask } 