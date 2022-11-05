import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Title } from '../../components/Title'
import { Footer } from '../../components/Footer'
import css from '../../assets/techs/css.svg'
import git from '../../assets/techs/git.svg'
import html from '../../assets/techs/html.svg'
import js from '../../assets/techs/js.svg'
import react from '../../assets/techs/react.svg'

export function About() {
  return (
    <Container>
      <Header />
      <Socials />
      <main className="wrapper">
        <Title>sobre</Title>
        <div className="text-content">
          <p>
            Prazer sou Renan Leandro da Silva 👋🏼, mas pode me chamar de renyzera
            também.
          </p>
          <p>
            Desenvolvo projetos utilizando <strong>React.js</strong>,{' '}
            <strong>styled-components</strong> com
            <strong>JavaScript</strong>, que vão desde uma Landing Page até
            aplicações com API's. Algumas aplicações web que fiz, você pode
            conferir logo abaixo e também la no meu github.
          </p>
          <p>
            Pretendo seguir minha carreira como DEV <strong>FrontEnd</strong>,
            sempre resolvendo problemas com códigos, seguindo metodologia ágil e
            que tenham um bom desempenho e entregando valor para o cliente
            final.
          </p>
        </div>
        <div className="tech-icons">
          <ul>
            <li>
              <img src={css} alt="CSS3 Icon" />
            </li>
            <li>
              <img src={html} alt="HTML5 Icon" />
            </li>
            <li>
              <img src={js} alt="Javascript Icon" />
            </li>
            <li>
              <img src={react} alt="React.js Icon" />
            </li>
            <li>
              <img src={git} alt="Git Icon" />
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
