import { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // las validation es en el handleSubmit

    const { todoName, todoDescripcion } = todo;

    if (!todoName.trim() || !todoDescripcion.trim()) {
      setError(true);
      return;
    }

    setError(false);

    setTodo({
      todoName: "",
      todoDescripcion: "",
      todoEstado: "pendiente",
      todoCheck: false,
    });
  };

  const handleChange = (e) => {
    //console.log(e.target.value); //valor del input
    //console.log(e.target.name); //valor de la llave

    // se extrae los valores de target
    //destructuring JS
    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value, // se debe condicionar para establecer la diferencia entre check y value.
    });

    //entre parentesis como el return omitido
    // setTodo((old) => ({
    //   ...old,
    //   [e.target.name]: e.target.value,
    // }));
  };

  const PintarError = () => {
    return <div className="alert alert-danger">Campos Obligatorios</div>;
  };

  return (
    <>
      <h2>Formulario Controlado</h2>
      {/* {error ? <PintarError /> : null} */}
      {error && <PintarError />}
      <form className="containerForm" onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoName" // importante los name
          onChange={handleChange}
          value={todo.todoName} //cuando se usa el onchange tiene que haber un value
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoDescripcion" // importante los name
          onChange={handleChange}
          value={todo.todoDescripcion}
        ></textarea>
        <select
          className="form-control mb-2"
          name="todoEstado" //importante los name
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        {/* CHECK */}

        <div className="form-check mt-5 mb-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="flexcheckDefault"
            name="todoCheck"
            checked={todo.todoCheck}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexcheckDefault">
            Dar Prioridad
          </label>
        </div>

        {/* FINAL CHECK */}

        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
