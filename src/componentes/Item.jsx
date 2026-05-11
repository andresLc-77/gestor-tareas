import './Item.css'

function Item({ tarea }) {
  return (
    <article className="item">
      <h3 className="item__texto">{tarea.texto}</h3>
      <p className="item__estado">
        {tarea.completada ? 'Completada' : 'Pendiente'}
      </p>
    </article>
  )
}

export default Item