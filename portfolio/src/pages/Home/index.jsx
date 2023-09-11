import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'
import imgProfile from '../../assets/profile-img.png'

export function Home() {
  return (
    <Container>
      <Socials />
      <Header />
      <main className='main-container'>
        <div className='container'>
          <div className="column">
            <h2 className="title">Renan Silva</h2>
            <p className="description">Desenvolvedor <br/> FullStack</p>
          </div>
          <div className="column img-profile">
            <img className="image" src={imgProfile} alt="Imagem da Coluna 2"/>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
