import React from 'react'




function TodoItem(props) {

    const getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            border: '1px #ccc dotted',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }

    const btnStyle = () => {
        return {
            background: '#ff0000',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right'
        }
    }



    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={props.markComplete.bind(this, props.todo.id)} /> { }
                {props.todo.title}
                <button style={btnStyle()} onClick={props.removeTodo.bind(this, props.todo.id)}>x</button>
            </p>
        </div>
    )
}




export default TodoItem

