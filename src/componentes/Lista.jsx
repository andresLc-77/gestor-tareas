import Item from './Item'
import './Lista.css'

function Lista({ tareas, alEliminar, alAlternar }) {

  if (tareas.length === 0) {
    return (
      <p className="lista__vacia">
        No hay tareas. Agrega la primera arriba.
      </p>
    )
  }

  return (
    <ul className="lista">
      {tareas.map(tarea => (
        <Item
          key={tarea.id}
          tarea={tarea}
          alEliminar={alEliminar}
          alAlternar={alAlternar}
        />
      ))}
    </ul>
  )
}

export default Lista