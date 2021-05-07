export function loadTodosAction() {
    console.log("loadTodosAction")
  
  
    return (dispatch) => {
    fetch(process.env.REACT_APP_TODOS_URL)
      .then((response) => response.json())
      .then((data) => dispatch({type:"LOAD_TODOS",payload:data}));
  };

  
}
