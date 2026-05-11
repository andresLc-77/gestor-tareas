import Encabezado from './componentes/Encabezado'
import Formulario from './componentes/Formulario'
import Lista from './componentes/Lista'
import Item from './componentes/Item'
import PiePagina from './componentes/PiePagina'
import './App.css'

function App() {
  return (
    <div className="app">
      <Encabezado />
      <Formulario />
      <Lista />
      <Item />
      <PiePagina />
    </div>
  )
}

export default App