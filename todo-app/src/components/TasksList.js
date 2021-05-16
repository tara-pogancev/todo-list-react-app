import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TasksList() {
    const [todos, setTodos] = useState([]);

    const NewTask = todo => {
        const newTasks = [...todos, todo]
        setTodos(newTasks);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    return (
        <div>
            <h1>What's on the schedule today?</h1>
            <TodoForm onSubmit={NewTask}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
        </div>
    )
}

export default TasksList
