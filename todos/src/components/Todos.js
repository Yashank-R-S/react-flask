import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
    console.log(props)
    return props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} removeTodo={props.removeTodo} />
    ))
}

export default Todos
