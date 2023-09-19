import { Container, Text } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import css from '../../assets/techs/css.svg'
import git from '../../assets/techs/git.svg'
import html from '../../assets/techs/html.svg'
import js from '../../assets/techs/js.svg'
import react from '../../assets/techs/react.svg'
import typescript from '../../assets/techs/typescript.svg'
import jquery from '../../assets/techs/jquery.svg'
import sass from '../../assets/techs/sass.svg'
import postgresql from '../../assets/techs/postgre.svg'
import php from '../../assets/techs/php.svg'
import node from '../../assets/techs/node.svg'

export function About() {
  return (
    <Container>
      <Socials />
      <Header />
      <main className='main-container'>
        <Title>Sobre</Title>
        <div className='container'>
          <div className="text-area">
            <Text>Prazer sou Renan Leandro da Silva 👋🏼, mas pode me chamar de renyzera também.</Text>
            <Text>Desenvolvo projetos utilizando React.js, styled-components ou SASS com TypeScript, que vão desde uma Landing Page até aplicações consumindo API’s. Algumas aplicações web que fiz, você pode conferir na aba <a href=""></a> e também la no meu github.</Text>
            <Text>Pretendo seguir minha carreira como DEV FrontEnd, sempre resolvendo problemas com códigos, seguindo metodologia ágil e que tenham um bom desempenho e entregando valor para o cliente final.</Text>
          </div>
          <div className='technologies-container'>
            <ul className='techs-list'>
              <li><img src={css} alt="Linguagem de Programação"/></li>
              <li><img src={html} alt="Linguagem de Programação"/></li>
              <li><img src={js} alt="Linguagem de Programação"/></li>
              <li><img src={git} alt="Linguagem de Programação"/></li>
              <li><img src={react} alt="Linguagem de Programação"/></li>
              <li><img src={jquery} alt="Linguagem de Programação"/></li>
              <li><img src={sass} alt="Linguagem de Programação"/></li>
              <li><img src={typescript} alt="Linguagem de Programação"/></li>
              <li><img src={node} alt="Linguagem de Programação"/></li>
              <li><img src={php} alt="Linguagem de Programação"/></li>
              <li><img src={postgresql} alt="Linguagem de Programação"/></li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
