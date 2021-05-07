import React from 'react'
import TodoItem from './TodoItem';

export default function TodoListHook({todos,onDeleteTodo}) {
    

    return (
        <div>
        <h1>TodoListHook</h1>
        <table className="table">
            <thead></thead>
            <tbody>
                {todos.map( todo => 
                <TodoItem key={todo.id}  todo={todo} onDeleteTodo={onDeleteTodo}/>
                )}
            </tbody>    
        </table>
    </div>    )
}
