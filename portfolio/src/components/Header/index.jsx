import { Container } from './style'
import brasil from '../../assets/brasil.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

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
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#formation">Formação</a>
            </li>
          </ul>
        </nav>
        <div className="social">
          <a href="https://github.com/renyzeraa" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/renyzeraa/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="mailto:renansilvaytb@gmail.com" target="_blank">
            <SiGmail />
          </a>
        </div>
      </main>
    </Container>
  )
}
