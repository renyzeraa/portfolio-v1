import { Container } from './style'
import { Header } from '../../components/Header'
import {
  AiFillHeart,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { IoLanguageOutline } from 'react-icons/io5'
import { FaGraduationCap } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

import photo from '../../assets/my_photo.png'
import arrow from '../../assets/arrow.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import react from '../../assets/react.svg'
import js from '../../assets/js.svg'
import git from '../../assets/git.svg'
import beauty from '../../assets/projects/beauty.png'
import gpm from '../../assets/projects/gpm.png'
import mymovies from '../../assets/projects/mymovies.png'

export function Home() {
  window.addEventListener('scroll', showBackToTopButtonOnScroll)

  function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
      document.querySelector('#backToTopButton').classList.add('show')
    } else {
      document.querySelector('#backToTopButton').classList.remove('show')
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <a id="backToTopButton" href="#home">
          <img src={arrow} alt="" />
        </a>
        <section className="home-content" id="home">
          <div className="title-content">
            <h1 className="title-name">
              RENAN <br /> SILVA
            </h1>
          </div>
          <div className="photo-content">
            <h1 className="title-dev">
              DEV <br /> FRONT <br /> END
            </h1>
            <svg
              className="border-img"
              width="417"
              height="586"
              viewBox="0 0 417 586"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 102.551L414 4V482.464L3 582V102.551Z"
                stroke="#B629F8"
                strokeWidth="6"
              />
            </svg>

            <img src={photo} alt="Foto de Renan Silva" />
          </div>
        </section>

        <section className="about-content" id="about">
          <div className="text-content">
            <p>
              Prazer sou Renan Leandro da Silva 👋🏼, mas pode me chamar de
              renyzera também. Sou <strong>desenvolvedor</strong>, tenho 23 anos
              e moro em Santa Catarina.
            </p>
            <p>
              Desenvolvo projetos utilizando <strong>React.js</strong>,
              <strong>styled-components</strong> com <strong>JavaScript</strong>
              , que vão desde uma Landing Page até aplicações com API’s. Algumas
              aplicações web que fiz, você pode conferir logo abaixo e também la
              no meu github.
            </p>
            <p>
              Pretendo seguir minha carreira como DEV FrontEnd, sempre
              resolvendo problemas com códigos, seguindo metodologia ágil e que
              tenham um bom desempenho e entregando valor para o cliente final.
            </p>
            <div className="techs-content">
              <ul>
                <li>
                  <img src={html} alt="html icon" />
                </li>
                <li>
                  <img src={css} alt="css icon" />
                </li>
                <li>
                  <img src={js} alt="js icon" />
                </li>
                <li>
                  <img src={react} alt="react icon" />
                </li>
                <li>
                  <img src={git} alt="git icon" />
                </li>
              </ul>
            </div>
          </div>
          <div className="title-content">
            <h1 className="title-introduction">sobre</h1>
          </div>
        </section>

        <section className="project-content" id="projects">
          <div className="title-content">
            <h1 className="title-introduction">projetos</h1>
          </div>

          <div className="projects">
            <a
              href="https://my-movies-aplication.netlify.app/"
              className="project"
              target="_blank"
            >
              <div className="about-project">
                <h3 className="title">My Movies</h3>
                <img src={mymovies} alt="" />
                <p>
                  Aplicativo para salvar seus filmes favoritos. Desenvolvida com
                  API própria.
                </p>
              </div>
              <div className="spans">
                <span>React</span>
                <span>Node</span>
                <span>JavaScript</span>
              </div>
            </a>
            <a
              href="https://renyzeraa.github.io/rocketseat-explorer/Stage09/Challenge01/"
              className="project"
              target="_blank"
            >
              <div className="about-project">
                <h3 className="title">Gpm Car</h3>
                <img src={gpm} alt="" />
                <p>
                  Landing page para um cliente, no qual a empresa faz chapeação
                  automotiva.
                </p>
              </div>
              <div className="spans">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </a>
            <a
              href="https://renyzeraa.github.io/LP-beautysalon/"
              className="project"
              target="_blank"
            >
              <div className="about-project">
                <h3 className="title">Beauty Salon</h3>
                <img src={beauty} alt="" />
                <p>
                  Landing page para uma empresa de salão de beleza, adaptada
                  para celular também.
                </p>
              </div>
              <div className="spans">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </a>

            <a
              className="btn-git"
              href="https://github.com/renyzeraa?tab=repositories"
              target="_blank"
            >
              Clique para ver mais projetos
            </a>
          </div>
        </section>

        <section className="formation-content" id="formation">
          <div className="content">
            <div className="formation">
              <p>
                Me mantenho sempre atualizado com cursos intensivos, bootcamps,
                hackatons, eventos online e presencial.
              </p>
              <div className="course-content">
                <FaGraduationCap />
                <div className="courses">
                  <h3>Graduação</h3>
                  <a className="not-cursor">
                    Bacharelado em Ciências da Computação
                  </a>
                </div>
                <BsBook />
                <div className="courses">
                  <h3>Cursos Intensivos</h3>
                  <a
                    href="https://www.rocketseat.com.br/explorer"
                    target="_blank"
                  >
                    Curso Explorer RocketSeat <span>120hr</span>
                  </a>
                  <a href="https://lp.rocketseat.com.br/ignite" target="_blank">
                    Curso Ignite RocketSeat <span>150hr</span>
                  </a>
                </div>
                <IoLanguageOutline />
                <div className="courses">
                  <h3>idiomas</h3>
                  <a className="not-cursor">
                    Inglês <span>/ Básico</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="title-content">
              <h1 className="title-introduction">
                for <br /> ma <br />
                ção
              </h1>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section>
          <div className="text">
            <p>
              Estou disponível para projetos. Entre em contato comigo e marcamos
              uma conversa 😉.
            </p>
          </div>
          <div className="contact">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/renyzeraa/" target="_blank">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="mailto:renansilvaytb@gmail.com" target="_blank">
                  <SiGmail />
                </a>
              </li>
              <li>
                <a href="https://github.com/renyzeraa" target="_blank">
                  <AiOutlineGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/renyzeraa/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <p className="by">
            Feito com <AiFillHeart /> por Renan Silva
          </p>
        </section>
      </footer>
    </Container>
  )
}
