import { connect } from 'react-redux';
import { loadTodosAction } from '../actions/todos.actions';
import TodoListHook from '../components/TodoListHook/TodoListHook';

const mapStateToProps = (state) =>{
    return {todos:state.theTodos}
}

const mapDispatchToProps = (dispatch) => {
    return{
        onDeleteTodo:(id)=>{
            dispatch({type:"DELETE_TODO",payload:id})
        },
        loadTodos:()=>{
            dispatch(loadTodosAction())
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(TodoListHook);

