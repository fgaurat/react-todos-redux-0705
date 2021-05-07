import React from 'react';



export default function TodoForm({todoForm,handleSubmit,handleChange}) {
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value= {todoForm.title} name="title" onChange={handleChange}/>
        </label>
        <label>
          dueDate:
          <input type="date" value= {todoForm.dueDate} name="dueDate" onChange={handleChange}/>
        </label>
        <input type="checkbox" checked= {todoForm.completed} name="completed" onChange={handleChange}/>
        Completed ?<button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
