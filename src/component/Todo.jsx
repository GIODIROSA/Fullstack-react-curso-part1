const Todo = ({ todo }) => {
  const { nombre, descripcion, estado, prioridad } = todo;

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start mb-2 mt-3">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {nombre} - {estado ? "Finalizado" : "Pendiente"}
          </div>
          <p>{descripcion}</p>
        </div>
        <span className="badge bg-primary rounded-pill">
          {prioridad && "Prioridad"}
        </span>
      </li>
    </>
  );
};

export default Todo;
