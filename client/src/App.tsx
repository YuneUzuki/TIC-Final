import './App.css'
import '../dist/output.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

//Comps
import Login from "./components/Login"
import Index from "./components/Index"
import UsuariosConsulta from "./components/consulta/UsuariosConsulta"
import UsuariosRegistro from "./components/registro/UsuariosRegistro"
import UnidadesMedidaConsulta from "./components/consulta/UnidadesMedidaConsulta"
import UnidadesMedidaRegistro from './components/registro/UnidadesMedidaRegistro'
import TiposProdConsulta from "./components/consulta/TiposProdConsulta"
import TiposProdRegistro from "./components/registro/TiposProdRegistro"
import ProdConsulta from './components/consulta/ProdConsulta'
import ProdRegistro from './components/registro/ProdRegistro'
import FornConsulta from './components/consulta/FornConsulta'
import FornRegistro from './components/registro/FornRegistro'
import FornProdConsulta from './components/consulta/FornProdConsulta'
import FornProdRegistro from './components/registro/FornProdRegistro'
import TipoMovConsulta from './components/consulta/TipoMovConsulta'
import TipoMovRegistro from './components/registro/TipoMovRegistro'
import MovimentacaoConsulta from './components/consulta/MovimentacaoConsulta'

function App()
{
  return(
    <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/index' element={<Index />} />
          <Route path='/consultar/usuarios' element={<UsuariosConsulta />} />
          <Route path='/editar/usuarios' element={<UsuariosRegistro />} />
          <Route path='/consultar/unme' element={<UnidadesMedidaConsulta />} />
          <Route path='/editar/unme' element={<UnidadesMedidaRegistro />} />
          <Route path='/consultar/tipoprod' element={<TiposProdConsulta />} />
          <Route path='/editar/tipoprod' element={<TiposProdRegistro />} />
          <Route path='/consultar/prod' element={<ProdConsulta />} />
          <Route path='/editar/produto' element={<ProdRegistro />} />
          <Route path='/consultar/forn' element={<FornConsulta />} />
          <Route path='/editar/fornecedor' element={<FornRegistro />} />
          <Route path='/consultar/fornprod' element={<FornProdConsulta />} />
          <Route path='/editar/fornprod' element={<FornProdRegistro />} />
          <Route path='/consultar/tipomov' element={<TipoMovConsulta />} />
          <Route path='/editar/tipomov' element={<TipoMovRegistro />} />
          <Route path='/consultar/mov' element={<MovimentacaoConsulta />} />
        </Routes>
    </Router> 
  )
}

export default App