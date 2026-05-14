import { useState } from 'react'
import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {

  // ─── 1. EL ESTADO: array de tareas ───────────────────
  // Ya no está "quemado". Ahora React lo controla.
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Estudiar React",   completada: false },
    { id: 2, texto: "Hacer ejercicio",  completada: true  },
    { id: 3, texto: "Leer 10 paginas",  completada: false }
  ])

  // ─── 2. CREATE: agregar una tarea nueva ──────────────
  // Recibe el texto del Formulario y crea un objeto nuevo.
  const agregarTarea = (textoNuevo) => {
    const tareaNueva = {
      id: Date.now(),      // id único basado en tiempo
      texto: textoNuevo,
      completada: false    // siempre empieza pendiente
    }
    // IMPORTANTE: spread (...) crea un array NUEVO
    // Nunca usar .push() — React no detecta ese cambio
    setTareas([...tareas, tareaNueva])
  }

  // ─── 3. DELETE: eliminar una tarea ───────────────────
  // filter devuelve un array nuevo SIN la tarea eliminada
  const eliminarTarea = (idAEliminar) => {
    setTareas(tareas.filter(
      tarea => tarea.id !== idAEliminar
    ))
  }

  // ─── 4. UPDATE: marcar como completada / pendiente ───
  // map recorre todas y cambia solo la que coincide con el id
  const alternarCompletada = (idAAlternar) => {
    setTareas(tareas.map(tarea =>
      tarea.id === idAAlternar
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ))
  }

  return (
    <div className="app">
      <Encabezado titulo="Mis Tareas" subtitulo="Organiza tu dia" />

      {/* Le pasamos la función al Formulario */}
      <Formulario alAgregar={agregarTarea} />

      {/* Le pasamos el array Y las dos funciones a Lista */}
      <Lista
        tareas={tareas}
        alEliminar={eliminarTarea}
        alAlternar={alternarCompletada}
      />

      <PiePagina />
    </div>
  )
}

export default App