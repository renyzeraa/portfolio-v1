import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'

export function About() {
  return (
    <Container>
      <Socials />
      <Header />
      <main className='main-container'>
      </main>
      <Footer />
    </Container>
  )
}
