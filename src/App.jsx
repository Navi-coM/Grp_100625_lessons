import { useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), text
    };
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const sortTodos = () => {
    const sorted = [...todos].sort((a, b) => {
      if(a.text.toLowerCase() < b.text.toLowerCase()) return sortAsc ? -1 : 1;
      if(a.text.toLowerCase() > b.text.toLowerCase()) return sortAsc ? 1 : -1;
      return 0;
    })
    setTodos(sorted);
    setSortAsc(!sortAsc);
  }

  return (
    <div className="bg-grey p-5 flex flex-col items-center">
      <h1 className='text-2xl font-bold text-center mb-4'>My Todo List</h1>
      <TodoForm onAddTodo = {addTodo}/>
      <button onClick={sortTodos} className='bg-sky-500/50 py-2 px-4 rounded-xl mb-5'>Sort {sortAsc ? 'A - Z' : 'Z - A'}</button>
      <TodoList todos={todos} onDeleteTodo={deleteTodo}/>
    </div>
  )
}

export default App;


// let todos = [
// {1, 'Купити хліб', false},
// {2, 'Вивчити JS', true}
// ];

// setTodos() {
//   todos.push()
// }

// id
// textValue
// isChecked


// props
// state