import React from "react";
import {state} from "./context";

const Context = React.createContext();

function App(props) {
  
  const selectTodo = todo => {
    console.log(todo);
  };

  const openModal = todo => {
    console.log("open modal");
  };

  const removeTodo = todo => {
    console.log("remove todo");
  };

  return (
    <Context.Provider value={state}>
      <div className="container">
        
        {state.todos.map(todo => {
          return (
            <div
              style={{ backgroundColor: todo.selected ? "lightskyblue" : "" }}
              className="todo"
              key={todo.id}
            >
              <div>{todo.name}</div>
              <div>
                <button onClick={() => selectTodo(todo)}>Select</button>
                <button onClick={() => openModal(todo)}>Update</button>
                <button onClick={() => removeTodo(todo)}>Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </Context.Provider>
  );
}

export default App;
