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
  //  write your useState hook here using this array as a starting point.
  const todos = 
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
  ]

  const addTodo = text => {
    
    //  complete this function to add a new entery to the todo list

  };

  const completeTodo = index  => {
    
    //  complete this function to mark a todo entery as completed.

  };

  const deleteTodo = index => {
    
    // complete this function to delete a todo entery.

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
