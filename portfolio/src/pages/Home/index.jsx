import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'
import profile from '../../assets/profile-img.png'

export function Home() {
  return (
    <Container>
      <Header />
      <Socials />
      <main>
        <div className="title-content">
          <h1>
            renan <br /> silva
          </h1>
          <h2>
            desenvolvedor <br /> frontend
          </h2>
        </div>
        <div className="img-content">
          <img src={profile} alt="Image de Renan Silva" />
        </div>
      </main>
      <Footer />
    </Container>
  )
}
