import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'

export function About() {
  return (
    <Container>
      <Socials />
      <Header />
      <main className='main-container'>
        <Title>Sobre</Title>
        <div className='container'>
          
        </div>
      </main>
      <Footer />
    </Container>
  )
}
