import React from 'react'

const TaskList = (props) => {
    return (
        <>
            <h1 className='text-color-blue inline'>Inbox</h1>
            <hr className='mt-2 mb-10' />
            <section>
                <ul>
                    {props.children}
                </ul>
            </section>
        </>
    )
}

export { TaskList } 