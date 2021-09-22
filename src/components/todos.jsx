import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { todoAdd, loadTodos, finishedTodos, todoFinish, todoDelete } from "../store/toDo";

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector(loadTodos);
    const finishedTask = useSelector(finishedTodos);

    const [input, setInput] = useState("")
    if (todos == undefined) {
        <h1> loading </h1>
    }
    console.log(todos)
    return (
        <div>
            <div className="input">
            <input placeholder = "add a todo" type="text" value={input} onChange={e => setInput(e.target.value)}></input>
            <button onClick={() => dispatch(todoAdd(input))}> Add to do </button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li>
                        <span className={todo.resolved ? "todo__done" : "todo__undone"}>{todo.description}</span>
                        <button onClick={() => dispatch(todoFinish(todo.id, todo.resolved))}>
                            {todo.resolved ? "Todo undone" : "Todo done"}</button>
                        <button onClick={() => dispatch(todoDelete(todo.id))}>
                            Delete</button>
                    </li>
                ))}
            </ul>
            <p>Finished tasks : {finishedTask.length}</p>
        </div>
    );
};

export default Todos;