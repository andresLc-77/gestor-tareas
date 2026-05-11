// Item.jsx — con useState para cambiar visualmente
import { useState } from 'react'
import './Item.css'

function Item({ tarea }) {
  const [resaltado, setResaltado] = useState(false)

  const manejarCompletar = (evento) => {
    evento.stopPropagation()
    alert(`Marcar como completada: ${tarea.texto}`)
  }

  const manejarEliminar = (evento) => {
    evento.stopPropagation()
    alert(`Eliminar: ${tarea.texto}`)
  }

  return (
    <article
      className={resaltado ? 'item item--resaltado' : 'item'}
      onClick={() => setResaltado(!resaltado)}
    >
      <div className="item__contenido">
        <h3 className="item__texto">{tarea.texto}</h3>
        <p className="item__estado">
          {tarea.completada ? 'Completada' : 'Pendiente'}
        </p>
      </div>
      <div className="item__acciones">
        <button onClick={manejarCompletar}>✓</button>
        <button onClick={manejarEliminar}>✕</button>
      </div>
    </article>
  )
}

export default Item