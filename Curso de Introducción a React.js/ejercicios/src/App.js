import { CreateTodoButton } from "./components/CreateTodoButton"
import { TodoList } from "./components/TodoList"
import { TodoSearch } from "./components/TodoSearch"
import { TodoCounter } from "./components/TodoCounter"
import { TodoItem } from "./components/TodoItem"
import { Navbar } from "./components/Navbar"
const todos = [
  { text: "Cortar ceboolla", completed: false },
  { text: "Tomar curso de intro a react", completed: false },
  { text: "Trabajar", completed: false }
]
function App() {
  return (
    <>
      <Navbar />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;