import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <Container>
      <Header />
      <Socials />
      <Footer />
    </Container>
  )
}
