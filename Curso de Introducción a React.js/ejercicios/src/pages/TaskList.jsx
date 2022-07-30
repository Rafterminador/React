import React from 'react'
import { TodoItem } from "../components/TodoItem"
class TaskList extends React.Component {
    sortPin() {
        console.log("ordenar")
    }

    render() {
        const todos = this.props.data
        return (
            <>
                <h1 className='text-color-blue inline'>Inbox</h1>
                <hr className='mt-2 mb-10' />
                <section>
                    <ul>
                        <PinContext.Provider
                            value={this.sortPin}>
                            {todos.map(todo => (
                                <TodoItem key={todo.text} data={todo} />
                            ))}
                        </PinContext.Provider>
                    </ul>
                </section>
            </>
        )
    }
}
export { TaskList }
export const PinContext = React.createContext()