import { useState } from 'react'

import './App.css'

import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import PiePagina from './componentes/PiePagina'
import Filtros from './componentes/Filtros'



function cargarTareasIniciales() {

  try {

    const guardado = localStorage.getItem('tareas')

    if (guardado === null) {
      return []
    }

    return JSON.parse(guardado)

  } catch (error) {

    console.error('Error al cargar tareas:', error)

    return []
  }
}



function App() {

  const [tareas, setTareas] = useState(cargarTareasIniciales)

  const [busqueda, setBusqueda] = useState("")

  const [filtro, setFiltro] = useState("todas")



  const guardarTareas = (nuevasTareas) => {

    setTareas(nuevasTareas)

    localStorage.setItem(
      'tareas',
      JSON.stringify(nuevasTareas)
    )
  }



  const agregarTarea = (textoNuevo) => {

    const tareaNueva = {
      id: Date.now(),
      texto: textoNuevo,
      completada: false
    }

    guardarTareas([
      ...tareas,
      tareaNueva
    ])
  }



  const eliminarTarea = (idAEliminar) => {

    guardarTareas(
      tareas.filter(
        tarea => tarea.id !== idAEliminar
      )
    )
  }



  const alternarCompletada = (idAAlternar) => {

    guardarTareas(

      tareas.map(tarea =>

        tarea.id === idAAlternar

          ? {
              ...tarea,
              completada: !tarea.completada
            }

          : tarea
      )
    )
  }



  const tareasFiltradas = tareas

    .filter(tarea => {

      if (filtro === "pendientes") {
        return !tarea.completada
      }

      if (filtro === "completadas") {
        return tarea.completada
      }

      return true
    })

    .filter(tarea => {

      return tarea.texto
        .toLowerCase()
        .includes(
          busqueda.toLowerCase()
        )
    })



  return (

    <>

      <Encabezado
        titulo="Mis Tareas"
        subtitulo="Organiza tus pendientes"
      />



      <Formulario
        alAgregar={agregarTarea}
      />



      <Filtros
        busqueda={busqueda}
        alCambiarBusqueda={setBusqueda}
        filtro={filtro}
        alCambiarFiltro={setFiltro}
      />



      <Lista
        tareas={tareasFiltradas}
        alEliminar={eliminarTarea}
        alAlternar={alternarCompletada}
      />

      <PiePagina />

    </>
  )
}

export default App