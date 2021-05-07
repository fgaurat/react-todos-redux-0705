const initState = [];

export const reducerTodos = (state = initState, action) => {
  
  switch (action.type) {
    // case 'DELETE_TODO':
    //   const newState = state.filter((todo) => todo.id !== action.payload);
    //   return [...newState];
    //   break;
    case 'LOAD_TODOS':
      const todos = action.payload
      return todos
    default:
      return [...state];
  }
};
