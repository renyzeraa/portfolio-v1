import { Container, Text } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Link } from 'react-router-dom'
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
            <Text>Prazer sou Renan Silva, um desenvolvedor full-stack apaixonado pela criação de experiências web incríveis. Com 25 anos de idade e uma paixão ardente pela tecnologia, mergulhei em diversas linguagens de programação ao longo dos anos. Hoje, estou focado em aprimorar minhas habilidades tanto no front-end quanto no back-end.</Text>
            <Text>Atualmente, sou parte de uma equipe talentosa em uma empresa de grande porte a <a href="https://www.ipm.com.br/" target='_blank'>@IPM Sistemas</a>, especializada em soluções de gestão pública. Nesse ambiente desafiador, trabalhamos em um projeto SaaS orientado a objetos, fazendo uso de tecnologias como PHP, jQuery e JavaScript.</Text>
            <Text>No meu tempo livre, estou constantemente buscando aprender e evoluir. Estou dedicando minha energia aos cursos e projetos que me permitam dominar tecnologias modernas, como React e Node em TypeScript. Estou animado com as possibilidades que essas tecnologias oferecem para criar aplicativos web eficientes e inovadores.</Text>
            <Text>Este portfólio é uma coleção do meu trabalho e projetos que me inspiram. Convido você a explorar e conhecer um pouco mais sobre minha jornada como desenvolvedor e as experiências que criei em: <Link to='/projects' rel="noopener noreferrer">Projetos</Link>. Sinta-se à vontade para entrar em contato comigo para discutir oportunidades de colaboração ou simplesmente compartilhar suas ideias em: <Link to='/contact' rel="noopener noreferrer">Contato</Link>. Estou ansioso para conectar e criar novas aplicações juntos.</Text>
            <Text>Segue algumas das tecnologias e linguagens que tenho conhecimento.</Text>
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
