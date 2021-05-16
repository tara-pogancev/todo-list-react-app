import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        }); 

        setInput('');
    };

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Type your tasks here!"
                    value={input} name="input-text" className='todo-input' 
                    onChange={inputChange}/>

                <button className="add-task">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
