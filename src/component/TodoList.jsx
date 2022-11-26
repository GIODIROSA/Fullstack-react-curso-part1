import { useState } from "react";
import Formulario2 from "./Formulario2";
import Todo from "./Todo";


const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const agregarTodo = (todo) => {
  
    setTodos((old) => [...old, todo]);
  };

  return (
    <>
      <Formulario2 agregarTodo={agregarTodo} />
      <ol className="list-group list-group-numbered">
     {
      todos.map((item)=> (

          <Todo key={item.id} todo={item} />

          ))
        }
        </ol>


    </>
  );
};

export default TodoList;
