import { CreateTodoButton } from "./components/CreateTodoButton"
import { TodoSearch } from "./components/TodoSearch"
import { TodoCounter } from "./components/TodoCounter"
import { TodoItem } from "./components/TodoItem"
import { Navbar } from "./components/Navbar"
import { TaskList } from "./pages/TaskList"
console.reportErrorsAsExceptions = false;
const todos = [
  { title: "prueba", date: "Mar 20", time: "12:45 PM", isPinned: false, text: "The text blocks within the <li> elements remain correctly indented if they wrap around into multiple lines", completed: true },
  { title: "prueba", date: "Apr 20", time: "10:25 AM", isPinned: false, text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenati", completed: false },
  { title: "prueba", date: "Dec 25", time: "3:20 AM", isPinned: true, text: "Use the RANDARRAY() dynamic array function to return random names or other text in Microsoft Excel", completed: false }
]
function App() {
  return (
    <div className='content pb-16'>
      <Navbar />
      <div className="pt-8 px-4">
        <TaskList data={todos} />
        <TodoCounter />
        <TodoSearch />
        <CreateTodoButton />
      </div>
    </div>
  );
}

export default App;