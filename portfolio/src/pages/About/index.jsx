import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Title } from '../../components/Title'

export function About() {
  return (
    <Container>
      <Header />
      <Socials />
      <main>
        <Title>Teste</Title>
      </main>
    </Container>
  )
}
