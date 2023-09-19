import { Container } from './style'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export function Header() {
  function openMenu() {
    document.getElementById('navigation').classList.add('menu-expanded')
  }

  function closeMenu() {
    document.getElementById('navigation').classList.remove('menu-expanded')
  }

  return (
    <Container>
      <header id="navigation">
        <div className="wrapper">
          <Link to="/" className="logo">
            <p>&lt;renyzeraa/&gt;</p>
          </Link>
          <div className="menu">
            <ul className='menu-list'>
              <li className='menu-option'>
                <Link onClick={closeMenu} to="/">
                  Inicio
                </Link>
              </li>
              <li className='menu-option'>
                <Link onClick={closeMenu} to="/about">
                  Sobre
                </Link>
              </li>
              <li className='menu-option'>
                <Link onClick={closeMenu} to="/projects">
                  Projetos
                </Link>
              </li>
              {/* <li className='menu-option'>
                <Link onClick={closeMenu} to="/formation">
                  Formação
                </Link>
              </li> */}
              <li className='menu-option'>
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
