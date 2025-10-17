import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Original from './comp/Original'
import Informativa from './comp/Informativa'
import Home from './comp/home'
import Fav from './comp/fav'
import Detalles from './comp/Detalles'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>

      <nav className="c-menu">
          <Link to="/">Home </Link>
          <Link to="/informativa">Informativa </Link>
          <Link to="/Original">Original </Link>
          <Link to="/favoritos">Favoritos </Link>
          <Link to="/Detalles">Detalles </Link>
        </nav>

      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/informativa" element={<Informativa /> } />
          <Route path="/Original" element={<Original /> } />
          <Route path="/favoritos" element={<Fav /> } />
          <Route path="/detalles/:depto/:municipio" element={<Detalles /> } />
      </Routes>
    </Router>
    </>   
  )
}

export default App
