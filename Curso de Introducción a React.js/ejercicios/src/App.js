import { CreateTodoButton } from "./components/CreateTodoButton"
import { TodoSearch } from "./components/TodoSearch"
import { TodoCounter } from "./components/TodoCounter"
import { TodoItem } from "./components/TodoItem"
import { Navbar } from "./components/Navbar"
import { TaskList } from "./pages/TaskList"
import { HomePage } from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
console.reportErrorsAsExceptions = false;
const todos = [
  { id: "1", title: "prueba", date: "Mar 20", time: "12:45 PM", isPinned: false, text: "The text blocks within the <li> elements remain correctly indented if they wrap around into multiple lines", completed: true },
  { id: "2", title: "prueba", date: "Apr 20", time: "10:25 AM", isPinned: false, text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenati", completed: false },
  { id: "3", title: "prueba", date: "Dec 25", time: "3:20 AM", isPinned: true, text: "Use the RANDARRAY() dynamic array function to return random names or other text in Microsoft Excel", completed: false },
  { id: "4", title: "prueba", date: "Dec 25", time: "3:20 AM", isPinned: true, text: "Use the RANDARRAY() dynamic array function to return random names or other text in Microsoft Excel", completed: false },
  { id: "5", title: "prueba", date: "Dec 25", time: "3:20 AM", isPinned: true, text: "Use the RANDARRAY() dynamic array function to return random names or other text in Microsoft Excel", completed: false }
]
function App() {
  return (
    <div className='content pb-16'>
      <Navbar />
      <div className="pt-8 px-4">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tasks' element={<TaskList data={todos} />} />
            <Route path='/counter' element={<TodoCounter />} />
            <Route path='/search' element={<TodoSearch />} />
            <Route path='/create/task' element={<CreateTodoButton />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;