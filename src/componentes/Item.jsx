import './Item.css'

function Item({ tarea, alEliminar, alAlternar }) {
  return (
    <article className={`item ${tarea.completada ? 'item--completada' : ''}`}>

      <div className="item__contenido">
        <h3 className="item__texto">{tarea.texto}</h3>
        <p className="item__estado">
          {tarea.completada ? 'Completada' : 'Pendiente'}
        </p>
      </div>

      <div className="item__acciones">

        <button
          className="boton-completar"
          onClick={() => alAlternar(tarea.id)}
        >
          {tarea.completada ? '↺' : '✓'}
        </button>

        <button
          className="boton-eliminar"
          onClick={() => alEliminar(tarea.id)}
        >
          ✕
        </button>

      </div>
    </article>
  )
}

export default Item