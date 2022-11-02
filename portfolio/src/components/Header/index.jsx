import { Container } from './style'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

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
                <a onClick={closeMenu} href="#home">
                  Inicio
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#about">
                  Sobre
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#projects">
                  Projetos
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#formation">
                  Formação
                </a>
              </li>
              <li>
                <a onClick={closeMenu} href="#formation">
                  Contato
                </a>
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
