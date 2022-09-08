import { Container } from './style'
import { Header } from '../../components/Header'
import my_photo from '../../assets/my_photo.png'

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <section className="home-content" id="home">
          <div className="title-content">
            <h1 className="title-name">RENAN SILVA</h1>
            <h1 className="title-introduction">DEV FRONT END</h1>
          </div>
          <div className="photo-content">
            <img src={my_photo} alt="Foto de Renan Silva" />
          </div>
        </section>

        <section className="about-content" id="about">
          <div className="content">
            <div className="text-content">
              <p>
                Prazer sou Renan Leandro da Silva 👋🏼, mas pode me chamar de
                renyzera tambem. Sou <strong>Desenvolvedor </strong> de Rio do
                Sul (SC) 📍. Serumaninho mente aberta, fã de formula 1 e
                automobilismo 🏁, vive a vida de propósitos, sonhos e parceiro
                para tomar umas 🍻.
              </p>
              <p>
                Desenvolvo projetos utilizando <strong>React.js</strong>,
                <strong>styled-components</strong> com
                <strong>JavaScript</strong>, que vai desde projetos com API's
                integradas até Landing Pages. Algumas aplicações web que fiz,
                você pode conferir logo abaixo.
              </p>
              <p>
                Tenho vivência com <strong>HTML5</strong>, <strong>CSS3</strong>
                , <strong>JavaScript</strong>, <strong>React.js</strong> focando
                em <strong>FrontEnd</strong> .
              </p>
            </div>
            <div className="title-content">
              <h1 className="title-introduction">sobre</h1>
            </div>
          </div>
        </section>

        <section className="project-content" id="projects">
          <div className="title-content">
            <h1 className="title-introduction">projetos</h1>
          </div>
          <div className="projects">
            <a href="#" className="project">
              <span>my movies</span>
            </a>
            <a href="#" className="project">
              <span>projeto</span>
            </a>
            <a href="#" className="project">
              <span>projeto</span>
            </a>
            <a href="#" className="project">
              <span>projeto</span>
            </a>
          </div>
        </section>
      </main>
    </Container>
  )
}
