// App.jsx — mi primer componente React
import './App.css'

function App() {
  const tituloProyecto = "Gestor de Tareas"

  return (
    <div className="app">
      <h1>{tituloProyecto}</h1>
      <p>Si ves este texto, React está funcionando 🎉</p>
    </div>
  )
}

export default App