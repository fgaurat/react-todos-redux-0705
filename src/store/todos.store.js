const initState = [
    {
        "userId": 2,
        "id": 28,
        "title": "nesciunt totam sit blanditiis sit",
        "completed": false,
        "dueDate": 1582620058000
      },
      {
        "userId": 2,
        "id": 29,
        "title": "laborum aut in quam",
        "completed": false,
        "dueDate": 1582620058000
      },
      {
        "userId": 2,
        "id": 30,
        "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
        "completed": true,
        "dueDate": 1582620058000
      },
];

export const reducerTodos = (state = initState, action) => {
  
  switch (action.type) {
    // case 'DELETE_TODO':
    //   const newState = state.filter((todo) => todo.id !== action.payload);
    //   return [...newState];
    //   break;
    // case 'LOAD_TODOS':
    //   const todos = action.payload
    //   return todos
    //   break;
    default:
      return [...state];
  }
};
