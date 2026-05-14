import { useState } from 'react'
import './Formulario.css'

// Recibe "alAgregar" que es la función agregarTarea de App.jsx
function Formulario({ alAgregar }) {

  // Estado interno SOLO para el texto del input
  const [nuevaTarea, setNuevaTarea] = useState("")

  const manejarEnvio = (evento) => {
    // Evita que la página se recargue al enviar el form
    evento.preventDefault()

    // Validación: no agregar si el input está vacío
    if (nuevaTarea.trim() === "") {
      alert("Por favor escribe algo")
      return
    }

    // 1. Avisarle al padre con el texto escrito
    alAgregar(nuevaTarea)

    // 2. Limpiar el input después de agregar
    setNuevaTarea("")
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Agregar nueva tarea</h2>

      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Escribe algo..."
      />

      {/* type="submit" conecta el botón al onSubmit del form */}
      <button type="submit">Agregar</button>
    </form>
  )
}

export default Formulario