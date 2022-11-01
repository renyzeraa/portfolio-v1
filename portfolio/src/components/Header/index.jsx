import { Container } from './style'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

export function Header() {
  return (
    <Container>
      <main className="desktop">
        <div className="logo">
          <p>&lt;/renyzeraa&gt;</p>
        </div>
        <nav className="menu-nav">
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#formation">Formação</a>
            </li>
            <li>
              <a href="#formation">Contato</a>
            </li>
          </ul>
        </nav>
      </main>
    </Container>
  )
}
