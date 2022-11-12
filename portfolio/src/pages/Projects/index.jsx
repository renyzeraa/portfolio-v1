import { Container } from './style'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Title } from '../../components/Title'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

import beauty from '../../assets/projects/beauty.png'
import gpm from '../../assets/projects/gpm.png'
import doctorcare from '../../assets/projects/doctorcare.png'
import mymovies from '../../assets/projects/mymovies.png'

export function Projects() {
  return (
    <Container>
      <Header />
      <Socials />
      <main className="wrapper">
        <Title>Projetos</Title>
        <div className="slide-content">
          <Swiper
            spaceBetween={20}
            className="mySwiper"
            // loopFillGroupWithBlank={true}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide className="card">
              <img src={beauty} alt="" />
              <h2>Beauty Salon</h2>
              <p>
                Landing page, apresentando salão de beleza, depoimentos e
                contato.
              </p>
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={gpm} alt="" />
              <h2>GPM Car</h2>
              <p>
                Landing page, empresa seguimento automotivo, como todos os
                serviços que a empresa oferece.
              </p>
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={doctorcare} alt="" />
              <h2>Doctor Care</h2>
              <p>Landing page, página para apresentar clinica médica.</p>
            </SwiperSlide>
            <SwiperSlide className="card">
              <img src={mymovies} alt="" />
              <h2>My Movies</h2>
              <p>
                Aplicação para salvar seus filmes favoritos, consumindo APIRest
                própria.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </Container>
  )
}
