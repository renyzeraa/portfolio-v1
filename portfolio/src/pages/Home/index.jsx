import { Container } from './style'
import { Header } from '../../components/Header'
import photo from '../../assets/my_photo.png'
import cursos from '../../assets/cursos.svg'
import idiomas from '../../assets/idiomas.svg'
import arrow from '../../assets/arrow.svg'
import {
  AiFillHeart,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import react from '../../assets/react.svg'
import js from '../../assets/js.svg'
import git from '../../assets/git.svg'

export function Home() {
  window.addEventListener('scroll', showBackToTopButtonOnScroll)

  function showBackToTopButtonOnScroll() {
    if (scrollY > 1200) {
      document.querySelector('#backToTopButton').classList.add('show')
    } else {
      document.querySelector('#backToTopButton').classList.add('show')
    }
  }

  return (
    <Container>
      <Header />
      <main>
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
                stroke-width="6"
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
                <p>
                  Aplicativo para salvar seus filmes favoritos. Desenvolvida com
                  API própria.
                </p>
              </div>
            </a>
            <a
              href="https://renyzeraa.github.io/rocketseat-explorer/Stage09/Challenge01/"
              className="project"
              target="_blank"
            >
              <div className="about-project">
                <h3 className="title">Gpm Car</h3>
                <p>
                  Landing page para um cliente, no qual a empresa faz chapeação
                  automotiva.
                </p>
              </div>
            </a>
            <a
              href="https://renyzeraa.github.io/LP-beautysalon/"
              className="project"
              target="_blank"
            >
              <div className="about-project">
                <h3 className="title">Beauty Salon</h3>
                <p>
                  Landing page para uma empresa de salão de beleza, adaptada
                  para celular também.
                </p>
              </div>
            </a>
            <a
              className="btn-git"
              href="https://github.com/renyzeraa"
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
                hackatons e mais alguns eventos online.
              </p>
              <div className="course-content">
                <img src={cursos} alt="" />
                <div className="courses">
                  <h3>Cursos Intensivos</h3>
                  <a
                    href="https://www.rocketseat.com.br/explorer"
                    target="_blank"
                  >
                    Curso Explorer RocketSeat <span>120hr</span>
                  </a>{' '}
                  <a href="https://lp.rocketseat.com.br/ignite" target="_blank">
                    Curso Ignite RocketSeat <span>150hr</span>
                  </a>
                </div>
                <img src={idiomas} alt="" />
                <div className="courses">
                  <h3>idiomas</h3>
                  <a>
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
              Estou disponível para projetos freelancer, híbrido e CLT/PJ. Entre
              em contato comigo e marcamos uma conversa 😉.
            </p>
          </div>
          <div className="contact">
            <a>renansilvaytb@gmail.com</a>

            <ul>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5547920003040&text=Ol%C3%A1%20Renan%2C%20gostei%20do%20seu%20site%20e%20tenho%20interesse%20em%20contratar%20seu%20servi%C3%A7o%20!"
                  target="_blank"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/renyzeraa/" target="_blank">
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/renyzeraa" target="_blank">
                  <AiFillTwitterCircle />
                </a>
              </li>
              <li>
                <a href="https://github.com/renyzeraa" target="_blank">
                  <AiOutlineGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/renyzeraa/">
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
      <a id="backToTopButton" href="#home">
        <img src={arrow} alt="" />
      </a>
    </Container>
  )
}
