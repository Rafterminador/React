import { CreateTodoButton } from "./components/CreateTodoButton"
import { TodoList } from "./components/TodoList"
import { TodoSearch } from "./components/TodoSearch"
import { TodoCounter } from "./components/TodoCounter"
import { TodoItem } from "./components/TodoItem"
import { Navbar } from "./components/Navbar"
import { TaskList } from "./pages/TaskList"
const todos = [
  { title: "prueba", time: "30-20-19", isPinned: "false", text: "Cortar ceboolla", completed: true },
  { title: "prueba", time: "30-20-19", isPinned: "false", text: "Tomar curso de intro a react", completed: false },
  { title: "prueba", time: "30-20-19", isPinned: "false", text: "Trabajar", completed: false }
]
function App() {
  return (
    <div className='content pb-16'>
      <Navbar />
      <div className="pt-8 px-8">
        <TaskList>
          {todos.map(todo => (
            <TodoItem key={todo.text} data={todo} />
          ))}
        </TaskList>
        <TodoCounter />
        <TodoSearch />
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;