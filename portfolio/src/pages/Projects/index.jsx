import { Container } from './style'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from '../../components/Header'
import { Socials } from '../../components/Socials'
import { Footer } from '../../components/Footer'
import { Title } from '../../components/Title'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'

export function Projects() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <main className="main-container wrapper">
        <Title>Projetos</Title>
      </main>
      <Footer />
    </Container>
  )
}
