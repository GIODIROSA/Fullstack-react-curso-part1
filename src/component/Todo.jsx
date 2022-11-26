const Todo = ({ todo, eliminarTodo, editarTodo }) => {
  const { id, nombre, descripcion, estado, prioridad } = todo;

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start mb-2 mt-3">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {nombre} - ({estado ? "Finalizado" : "Pendiente"})
          </div>
          <p>{descripcion}</p>

          {/* botones */}

          <div>
            <button
              className="btn btn-danger me-2"
              onClick={() => eliminarTodo(id)}
            >
              Eliminar
            </button>
            <button className="btn btn-warning" onClick={() => editarTodo(id)}>
              Editar
            </button>
          </div>

          {/* final botones */}
        </div>
        <span className="badge bg-primary rounded-pill">
          {prioridad && "Prioridad"}
        </span>
      </li>
    </>
  );
};

export default Todo;
