import { CreateTodoButton } from "./components/CreateTodoButton"
import { TodoSearch } from "./components/TodoSearch"
import { TodoCounter } from "./components/TodoCounter"
import { TodoItem } from "./components/TodoItem"
import { Navbar } from "./components/Navbar"
import { TaskList } from "./pages/TaskList"
const todos = [
  { title: "prueba", date: "Mar 20", time: "12:45 PM", isPinned: false, text: "Cortar ceboolla", completed: true },
  { title: "prueba", date: "Apr 20", time: "10:25 AM", isPinned: false, text: "Tomar curso de intro a react", completed: false },
  { title: "prueba", date: "Dec 25", time: "3:20 AM", isPinned: true, text: "Amet eu voluptate ea sunt do excepteur et proident culpa proident tempor nostrud. Exercitation consequat reprehenderit cupidatat sit excepteur commodo aliquip adipisicing ad nostrud nulla. Do nostrud officia anim fugiat fugiat consequat fugiat aute dolore ad sit in voluptate aliquip.", completed: false }
]
function App() {
  return (
    <div className='content pb-16'>
      <Navbar />
      <div className="pt-8 px-4">
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