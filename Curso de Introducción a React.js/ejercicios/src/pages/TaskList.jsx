import React from 'react'
import { TodoItem } from "../components/TodoItem"
class TaskList extends React.Component {
    constructor(props) {
        super(props)
        let sortData = this.sortByImportance(this.props.data)
        this.state = {
            data: sortData
        }
        this.sortPin = this.sortPin.bind(this)
        this.changeStatePin = this.changeStatePin.bind(this)
        this.taskCompleted = this.taskCompleted.bind(this)
        this.getIndex = this.getIndex.bind(this)
    }
    sortByImportance(array) {
        array = array.sort((a, b) => {
            return Number(a.isPinned) - Number(b.isPinned)
        })
        array.reverse()
        return array
    }
    getIndex(id, data) {
        const index = data.findIndex((data, index) => {
            return data.id === id
        })
        return index
    }
    changeStatePin(id) {
        let data = this.state.data
        let index = this.getIndex(id, data)
        if (data[index].isPinned === true) {
            data[index].isPinned = false
        } else {
            data[index].isPinned = true
        }
        this.setState(data)
    }
    taskCompleted(id) {
        let data = this.state.data
        let index = this.getIndex(id, data)
        if (data[index].completed === true) {
            data[index].completed = false
        } else {
            data[index].completed = true
        }
        this.setState(data)
    }
    sortPin(id) {
        this.changeStatePin(id)
        this.setState(this.sortByImportance(this.props.data))
    }
    render() {
        const todos = this.props.data
        let sortPin = this.sortPin
        let taskCompleted = this.taskCompleted
        // console.log(this.state.data)
        return (
            <>
                <h1 className='text-color-blue inline'>Inbox</h1>
                <hr className='mt-2 mb-10' />
                <section>
                    <ul>
                        <PinContext.Provider
                            value={{ sortPin, taskCompleted }}>
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