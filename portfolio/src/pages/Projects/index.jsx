import { Container } from './style'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'
import { Loading } from '../../components/Loading'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination])

export function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const breakpoints = {
    // quando a largura da tela for menor ou igual a 550 pixels
    550: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // quando a largura da tela for menor ou igual a 768 pixels
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // quando a largura da tela for maior que 768 pixels
    1024: {
      slidesPerView: 4,
      spaceBetween: 15
    }
  }

  useEffect(() => {
    // Substitua 'SEU_TOKEN_DE_ACESSO' pelo token que você gerou no GitHub.
    const token = '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';

    // Configuração do Axios com o token de acesso.
    const axiosInstance = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Função para buscar os repositórios.
    const fetchRepos = async () => {
      try {
        const response = await axiosInstance.get('/user/repos');
        setRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Container>
      <Header />
      <Socials />
      {loading && <Loading></Loading>}
      <main className="main-container wrapper">
        <Title>Projetos</Title>
        <div className='swipper-container'>
          <Swiper
            spaceBetween={20}
            className="mySwiper"
            slidesPerView={1}
            breakpoints={breakpoints}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {
              repos.map(oRepo => (
                  <SwiperSlide key={oRepo.id}>
                    <div className='card'>
                      <h1 title={oRepo.name}>{oRepo.name}</h1>
                      <p>{oRepo.description}</p>
                      <a title={oRepo.html_url} href={oRepo.html_url} target="_blank" rel="noopener noreferrer">
                        Ver no GitHub
                      </a>
                    </div>
                  </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
