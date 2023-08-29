import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'

/**
 * Componente de Rotas da Aplicação.
 *
 * Este componente é responsável por gerenciar as rotas da aplicação.
 *
 * @returns {JSX.Element} Um componente de rotas com base no estado de autenticação.
 */
export function Routes() {
    return (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    )
}