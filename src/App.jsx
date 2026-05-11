import Encabezado from './componentes/Encabezado'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {
  const tareas = [
    { id: 1, texto: "Estudiar React", completada: false },
    { id: 2, texto: "Hacer ejercicio", completada: true },
    { id: 3, texto: "Leer 10 paginas", completada: false }
  ]

  return (
    <div className="app">
      <Encabezado
        titulo="Mis Tareas"
        subtitulo="Organiza lo que tienes que hacer hoy"
      />
      <Lista tareas={tareas} />
      <PiePagina />
    </div>
  )
}

export default App