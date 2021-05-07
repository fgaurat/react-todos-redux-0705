import React, { Component } from 'react'
import TodoItem from './TodoItem';


export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
             todos:[]
        }

    }
    
    componentDidMount(){
        this.loadTodos()
    }

    loadTodos(){
        fetch(process.env.REACT_APP_TODOS_URL)
            .then(response => response.json())
            .then(data => this.setState({todos:data}))
    }

    onDeleteTodo = (id)=>{
        const url_delete = `${process.env.REACT_APP_TODOS_URL}/${id}`
        console.log(this)
        fetch(url_delete,{method:'DELETE'}).then( () => this.loadTodos())

        console.log("click")
        console.log(id)
    }

    render() {

        const todos = this.state.todos;
        return (
            <div>
                <h1>TodoList</h1>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        {todos.map( todo => 
                        <TodoItem key={todo.id}  todo={todo} onDeleteTodo={this.onDeleteTodo}/>
                        )}
                    </tbody>    
                </table>
            </div>
        )
    }
}









