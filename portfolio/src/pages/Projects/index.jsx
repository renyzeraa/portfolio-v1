import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Title } from '../../components/Title'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

export function Projects() {
  return (
    <Container>
      <Header />
      <Socials />
      <main className="wrapper">
        <Title>Projetos</Title>
      </main>
    </Container>
  )
}
