import { useRef } from "react";
import "../assets/css/FormularioNoControlado.css";

const FormularioNoControlado = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datos = new FormData(formulario.current); // se puede enviar directo al servidor.
    //console.log(...datos.entries()); //spread operator

    const objetoDatos = Object.fromEntries([...datos.entries()]);
    //console.table(objetoDatos);

    const { todoDescripcion, todoName } = objetoDatos;

    if (!todoDescripcion.trim() || !todoName.trim()) {
      console.log("____________esta vacio_____");
      return;
    }

    console.log("paso validaciones");
  };

  return (
    <div className="container mt-2">
      <h2>Formulario No Controlado</h2>
      <form className="containerForm" onSubmit={handleSubmit} ref={formulario}>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoName" // importante los name
          defaultValue="Tarea #01"
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="todoDescripcion" // importante los name
          defaultValue="Descripcion tarea #01"
        ></textarea>
        <select
          className="form-control mb-2"
          name="todoEstado" //importante los name
          defaultValue="completado"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default FormularioNoControlado;
