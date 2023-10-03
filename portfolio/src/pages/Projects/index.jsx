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

import { AiOutlineStar } from 'react-icons/ai'
import { SiTypescript } from 'react-icons/si'
import { TbGitFork } from 'react-icons/tb'
import { BiLogoJavascript } from 'react-icons/bi'
import {FaReact, FaCss3, FaHtml5, FaPhp, FaNodeJs, FaJava} from 'react-icons/fa'

export function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const breakpoints = {
    // quando a largura da tela for menor ou igual a 550 pixels
    550: {
      slidesPerView: 1,
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
    // Função para buscar os repositórios.
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/renyzeraa/repos');
        handleRepos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  /**
   * Retorna todos os repositórios filtrados pelo usuário renyzeraa
   * @param {array} aRepos 
   */
  function handleRepos(aRepos) {
    aRepos = aRepos.filter(oRepo => {
      return oRepo.owner && oRepo.owner.login === 'renyzeraa' && oRepo.language;
    }).sort((a, b) => b.stargazers_count - a.stargazers_count);
    setRepos(aRepos);
  }

  /**
   * 
   * @param {string} sInputString 
   * @returns string
   */
  function getFormatString(sInputString) {
    // Divide a string em palavras usando os separadores '-' e '_'
    const aWords = sInputString.split(/[-_]/);
    // Transforma a primeira letra de cada palavra em maiúscula e o restante em minúscula
    const aFormattedWords = aWords.map(oWord => {
      return oWord.charAt(0).toUpperCase() + oWord.slice(1).toLowerCase();
    });
    // Junta as palavras formatadas de volta em uma string
    return aFormattedWords.join(' ');
  }


  function getIconForLanguage(sLanguage) {
    switch (sLanguage) {
      case 'Java':
        return <FaJava />;
      case 'React':
        return <FaReact />;
      case 'NodeJS':
        return <FaNodeJs />;
      case 'HTML':
        return <FaHtml5 />;
      case 'CSS':
        return <FaCss3 />;
      case 'JavaScript':
        return <BiLogoJavascript />;
      case 'PHP':
        return <FaPhp />;
      case 'TypeScript':
        return <SiTypescript />;
      default:
        return '';
    }
  }

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
            slidesPerGroup={1}
            breakpoints={breakpoints}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {
              repos.map(oRepo => (
                  <SwiperSlide key={oRepo.id}>
                    <div className='card'>
                      <h1 className='title' title={oRepo.name}>{getFormatString(oRepo.name)}</h1>
                      <p className='description'>{oRepo.description}</p>
                      <footer className='footer'>
                        <div className='infos'>
                          <span className='forks' title={oRepo.forks + ' fork(s)'}><TbGitFork/>{oRepo.forks}</span>
                          <span className='starred' title={oRepo.stargazers_count + ' stargazers'}><AiOutlineStar/>{oRepo.stargazers_count}</span>
                          <span className='icon-language' title={oRepo.language}>{getIconForLanguage(oRepo.language)}</span>
                          
                        </div>
                        <a className='link-github' title={oRepo.html_url} href={oRepo.html_url} target="_blank" rel="noopener noreferrer">
                          Ver no GitHub
                        </a>
                      </footer>
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
