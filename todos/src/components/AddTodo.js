import React, { useState } from 'react'

function AddTodo(props) {
    const [title, setTitle] = useState('')

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTodo(title)
        setTitle('')
    }

    return (
        <form onSubmit={onSubmit} style={{ display: 'flex' }}>
            <input
                style={{ flex: '10', padding: '5px' }}
                type="text"
                name="title"
                placeholder="Add Todo.."
                value={title}
                onChange={onChange}
            />

            <input
                type="submit"
                value="Submit"
                className="btn"
                style={{ flex: '1' }}
            />
        </form>
    )
}

export default AddTodo
