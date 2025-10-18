import { useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), text
    };
    setTodos([...todos, newTodo]);
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <h1 className='text-3xl font-medium'>My Todo List</h1>
      <TodoForm onAddTodo = {addTodo}/>
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