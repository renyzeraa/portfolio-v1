import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Title } from '../../components/Title'

export function Projects() {
  return (
    <Container>
      <Header />
      <Socials />
      <main>
        <Title>Projetos</Title>
      </main>
    </Container>
  )
}
