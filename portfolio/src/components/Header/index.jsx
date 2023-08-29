import { Container } from './style'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export function Header() {
  function openMenu() {
    document.querySelector('header').classList.add('menu-expanded')
  }

  function closeMenu() {
    document.querySelector('header').classList.remove('menu-expanded')
  }

  return (
    <Container>
      <header id="navigation">
        <div className="wrapper">
          <a href="#home" className="logo">
            <p>&lt;renyzeraa/&gt;</p>
          </a>
          <div className="menu">
            <ul>
              <li>
                <Link onClick={closeMenu} to="/">
                  Inicio
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} to="/about">
                  Sobre
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} to="/projects">
                  Projetos
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} to="/formation">
                  Formação
                </Link>
              </li>
              <li>
                <Link onClick={closeMenu} to="/contact">
                  Contato
                </Link>
              </li>
            </ul>

            <ul className="social-links">
              <li>
                <a href="https://www.linkedin.com/in/renyzeraa" target="_blank">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.github.com/renyzeraa" target="_blank">
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </div>
          <button
            aria-expanded="false"
            aria-label="Abrir Menu"
            className="btn-nav open-menu"
            onClick={openMenu}
          >
            <HiMenuAlt3 />
          </button>
          <button
            aria-expanded="true"
            aria-label="Fechar Menu"
            className="btn-nav close-menu"
            onClick={closeMenu}
          >
            <IoClose />
          </button>
        </div>
      </header>
    </Container>
  )
}
