import React, { useState } from 'react';
import './App.css';


function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div 
    style ={{textDecoration: todo.isComplete ? 'line-through' : ''}}
    className="todo">
      {todo.text}
      <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  );
};

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handlSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
    }

    return (
      <form onSubmit={handlSubmit}>
        <input type='text' className='input' value={value} placeholder='New Task...' onChange={e => setValue(e.target.value)} />
      </form>
    )
}
function App() {
  const [todos, setTodos] = useState(
    [
    {
    text :  'Pickup groceries',
    isComplete : false
    },
    {
      text :  'Learn to code',
      isComplete : false
      },
      {
        text :  'Take over the world!',
        isComplete : false
        }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index  => {
    const newTodos =  [...todos];
    newTodos[index].isComplete= true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
