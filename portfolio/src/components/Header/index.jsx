import { Container } from './style'
import brasil from '../../../assets/brasil.png'

export function Header() {
  return (
    <Container>
      <main>
        <div className="logo">
          <p>renyzeraa </p>
          <img
            src={brasil}
            className="bandeira-brasil"
            alt="bandeira do brasil"
          />
        </div>
        <nav className="menu-nav">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Formação</a>
            </li>
          </ul>
        </nav>
      </main>
    </Container>
  )
}
