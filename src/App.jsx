import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from "./paginas/home"
import Fav from "./paginas/fav"
import Mapa from "./paginas/mapa"
import Informativa from "./paginas/informativa"
import Municipios from "./paginas/municipios"

function App() {

  return (
    <>
      <Router>

        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/fav">Favoritos</Link>
        </nav>


      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/informativa" element={<Informativa /> } />
          <Route path="/mapa" element={<Mapa /> } />
          <Route path="/fav" element={<Fav /> } />
          <Route path="/detalle/:depto/:municipio" element={<Municipios /> } />
      </Routes>
    </Router>
    </>
  )
}



export default App
