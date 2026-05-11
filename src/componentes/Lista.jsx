import './Lista.css'
import Item from './Item'

function Lista({ tareas }) {
  return (
    <ul className="lista">
      {tareas.map(tarea => (
        <Item key={tarea.id} tarea={tarea} />
      ))}
    </ul>
  )
}

export default Lista