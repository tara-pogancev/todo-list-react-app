import React, {useState} from 'react'
import {AiFillDelete} from 'react-icons/ai'

function Todo({todos, completeTodo, removeTodo}) {

    return todos.map((todo, index) => (
        <div className={todo.completed ? 'todo-item complete' : 'todo-item'}
        key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {!todo.completed ? todo.text : <s>{todo.text}</s>}
            </div>

            <div className="icons">
                <AiFillDelete 
                className='delete-icon' onClick={() => removeTodo(todo.id)}/>
            </div>

        </div>
    ))
}

export default Todo
