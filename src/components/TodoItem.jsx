import '../App.css';

function TodoItem({ todo, onDeleteTodo }) {
    return (
      <li className='input'>
        <span>{todo.text}</span>
        <button onClick={() => onDeleteTodo(todo.id)} className='bg-sky-500/50'>Delete</button>
      </li>
    )
}

export default TodoItem;
