import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";
import { useState } from "react";


const Formulario2 = ({ agregarTodo }) => {
  // INICIALIZANDO LA COLECCION

  const inicialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  // HOOK CUSTOM

  const [inputs, handleChange, reset] = useFormulario(inicialState);

  const { nombre, descripcion, estado, prioridad } = inputs;

  //HANDLE SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

   

    if (!nombre.trim()) {
      e.target[0].focus();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo esta vacio TODO",
      });

      return;
    }

    if (!descripcion.trim()) {
      e.target[1].focus();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo esta vacio Descripción",
      });
      return;
    }

    //agregar todo
    agregarTodo({
      nombre,
      descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad,
      id: uuidv4(),
    });

    Swal.fire("EXCELENTE!", "Lo lograste..!", "success");

    reset();
  };

  return (
    <div>
      <h3>Formulario app</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingresar todo"
          name="nombre"
          value={nombre}
          onChange={handleChange}
        />

        <textarea
          type="text"
          className="form-control mb-2 mt-2"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
        />

        <select
          className="form-control mb-2"
          name="estado"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <div className="form-check mb-2 mt-2">
          <input
            type="checkbox"
            id="check"
            className="form-check-input"
            name="prioridad"
            checked={prioridad}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="check">
            Dar Prioridad
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario2;
