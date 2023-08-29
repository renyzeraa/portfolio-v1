import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Formation } from '../pages/Formation'
import { Projects } from '../pages/Projects'

/**
 * Componente de roteamento principal da aplicação.
 *
 * O componente `AppRoutes` define as rotas da aplicação usando o pacote de roteamento `react-router-dom`.
 * Ele mapeia URLs para os componentes correspondentes que devem ser renderizados.
 * Também envolve os componentes que precisam de acesso ao carrinho de compras usando o contexto `CartProvider`.
 *
 * @returns {JSX.Element} Um elemento JSX que contém as rotas da aplicação.
 */
export function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  )
}