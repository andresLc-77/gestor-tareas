import './Encabezado.css'

function Encabezado({ titulo, subtitulo }) {
  return (
    <header className="encabezado">
      <h1 className="encabezado__titulo">{titulo}</h1>
      <p className="encabezado__subtitulo">{subtitulo}</p>
    </header>
  )
}

export default Encabezado