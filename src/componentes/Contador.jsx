// Contador.jsx — ejemplo didactico, lo borraremos al final
import { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <p>Llevas {contador} clicks</p>
      <button onClick={() => setContador(contador + 1)}>
        Sumar uno
      </button>
      <button onClick={() => setContador(0)}>
        Reiniciar
      </button>
    </div>
  )
}

export default Contador