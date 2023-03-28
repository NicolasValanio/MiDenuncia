import './App.css'
import Rutas from '../src/componentes/rutas'
import { Route, Routes, Link } from 'react-router-dom'


// NADIE TOCA ESTO!!!!
function App() {
// NADIE TOCA ESTO!!!!
  return (
    <div className="App">
{/* // NADIE TOCA ESTO!!!! */}
      <Rutas />
{/*  NADIE TOCA ESTO!!!! */}

      <Routes>

        <Route exact path="/" element={<UsuarioNoLog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/HabeasData" element={<HabeasData />} />
        <Route path="/PeticionesUsuarios" element={<PeticionesUsuarios />} />
        <Route path="/RegistroDenuncia" element={<RegistroDenuncia />} />
        <Route path="/RegistroUsuario" element={<RegistroUsuario />} />
        <Route path="/UsuarioLog" element={<UsuarioLog />} />
        <Route path="/VistaDenunciaX" element={<VistaDenunciaX />} />
        <Route path="/VistaSuperAdmin" element={<VistaSuperAdmin />} />
        <Route path="/VistaUsuario" element={<VistaUsuario />} />

        <Route path="*" element={<h1>PAGINA NO EXISTE</h1>} />
      </Routes>

    </div>
  ) 
}
// NADIE TOCA ESTO!!!!
export default App
// NADIE TOCA ESTO!!!!
