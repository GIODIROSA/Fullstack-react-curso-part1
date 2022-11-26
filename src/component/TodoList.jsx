import { useEffect, useState } from "react";
import Formulario2 from "./Formulario2";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  // AVERIGUAR
  // ====================

  // const [todos, setTodos] = useState(() => {

  //   const enMemoria = localStorage.getItem('todos')

  //   const initialValue = JSON.parse(enMemoria)

  //   return initialValue || ''

  // })

  // ==========================

  //   useEffect(() => {
  //     console.log("Leer todos local");
  //     if (localStorage.getItem("todos")) {
  //         setTodos(JSON.parse(localStorage.getItem("todos")));
  //     }
  // }, []);

  useEffect(() => {
    console.log("Guardar todo local");
    localStorage.setItem("todos", JSON.stringify());
  }, [todos]);

  // ==========================

  const agregarTodo = (todo) => {
    setTodos((old) => [...old, todo]);
  };

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const editarTodo = (id) => {
    const editarTodos = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );

    setTodos(editarTodos);
  };

  return (
    <>
      <Formulario2 agregarTodo={agregarTodo} />
      <ol className="list-group list-group-numbered">
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />
        ))}
      </ol>
    </>
  );
};

export default TodoList;
