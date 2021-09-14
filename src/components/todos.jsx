import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { todoAdd, loadTodos } from "../store/toDo";

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector(loadTodos);

    const [input, setInput] = useState("")
  
    return (
        <div>
            <div className="input">
            <input placeholder = "add a todo" type="text" value={input} onChange={e => setInput(e.target.value)}></input>
            <button onClick={() => dispatch(todoAdd(input))}> Add to do </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li>
                        {todo.description}
                        <button>Todo done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todos;