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
    }
    sortByImportance(array) {
        array = array.sort((a, b) => {
            return Number(a.isPinned) - Number(b.isPinned)
        })
        array.reverse()
        return array
    }
    changeStatePin(id) {
        let data = this.state.data
        const searchByPin = (data, id) => {
            const index = data.findIndex((data, index) => {
                return data.id === id
            })
            return index
        }
        if (data[searchByPin(data, id)].isPinned === true) {
            data[searchByPin(data, id)].isPinned = false
        } else {
            data[searchByPin(data, id)].isPinned = true
        }
        this.setState(data)
    }

    sortPin(id) {
        this.changeStatePin(id)
        this.setState(this.sortByImportance(this.props.data))
    }
    render() {
        const todos = this.props.data
        // console.log(this.state.data)
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