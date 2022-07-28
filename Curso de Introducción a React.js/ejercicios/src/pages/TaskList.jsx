import React from 'react'

class TaskList extends React.Component {
    prueba() {
        console.log("buenas")
    }

    render() {
        return (
            <>
                <h1 className='text-color-blue inline'>Inbox</h1>
                <hr className='mt-2 mb-10' />
                <section>
                    <ul>
                        {this.props.children}
                    </ul>
                </section>
            </>
        )
    }
}

export { TaskList } 