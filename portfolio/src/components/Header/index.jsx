import { Container } from './style'

export function Header() {
  return (
    <Container>
      <main>
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
