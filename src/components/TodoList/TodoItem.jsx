import React from 'react'

export default function TodoItem(props) {
    const {todo,onDeleteTodo} = props
    return (
    <tr>
        <td>{todo.id}</td>
        <td>{todo.title}</td>
        <td>{todo.completed}</td>
        <td>{todo.dueDate}</td>
        <td>
            <button className="btn btn-danger" onClick={ () => onDeleteTodo(todo.id)}>Delete</button>
        </td>
    </tr>

    )
}
