import { Outlet } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'

function App() {




  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <Cabecalho />
        <Outlet />
      </main>
    </>
  )
}

export default App
