import React, { useState } from 'react'
import TodoList from './TodoList';
import './todoStyle.css'
const  Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
    const [index, setIndex] = useState(0);
    
    const addTodo = () =>{
        
      
        setTodos([input,  ...todos]);
         
        setIndex({
            index: index + 1
        });    
        setInput('')
    }
    

    

    return (
        <>
            <div className="container">
                <input 
                    value={input}
                    placeholder="todo"
                    onChange={e => setInput(e.target.value)}
                    className="todoInput"
                    
                />
                <button 
                    className="todoBtn"
                    onClick={addTodo}
                >+</button>
            </div>

            <ul className="todoList">
                {todos.map((todo, index) => (        
                    <TodoList key={index} index={index} item = {todo} />
                ))}
            </ul>
        </>
    )
}



export default Todo