import { Container } from './style'
import { Header } from '../../components/Header'
import my_photo from '../../assets/my_photo.png'

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <section className="home-content" id="home">
          <div className="title-content">
            <h1 className="title-name">RENAN SILVA</h1>
            <h1 className="title-introduction">DEV FRONT END</h1>
          </div>
          <div className="photo-content">
            <img src={my_photo} alt="Foto de Renan Silva" />
          </div>
        </section>

        <section className="about-content" id="about">
          <div className="content">
            <div className="text-content">
              <p>
                Prazer sou Renan Leandro da Silva 👋🏼, mas pode me chamar de
                renyzera tambem. Sou desenvolvedor frontend, de Rio do Sul (SC)
                📍. Serumaninho mente aberta, fã de formula 1 e automobilismo 🏎,
                vive a vida de própositos e sonhos, ambicioso e parceiro para
                tomar umas 🍻.
              </p>
              <p>
                Desenvolvo projetos utilizando React.js, styled-components com
                JavaScript, que vai desde projetos com API’s integradas até
                Landing Pages. Algumas aplicações web que fiz, você pode
                conferir logo abaixo.
              </p>
              <p>Tenho vivência com HTML5, CSS3, JavaScript</p>
            </div>
            <div className="title-content">
              <h1 className="title-introduction">sobre</h1>
            </div>
          </div>
        </section>
      </main>
    </Container>
  )
}
