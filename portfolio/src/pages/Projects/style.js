import styled from 'styled-components'
import bgdesktop from '../../assets/bg/bg-home.png'
import bgmobile from '../../assets/bg/bg-home-mob.png'

export const Container = styled.div`
  background-image: url(${bgdesktop});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  .slide-content {
    padding-top: 60px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .mySwiper {
    padding: 0 48px;
  }

  .card {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    height: 400px;
    max-width: 280px;
    padding: 20px;
    border-radius: 10px;
    font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_SANS};
    img {
      width: 100%;
      height: 50%;
      display: block;
      object-position: center left;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 32px;
    }

    h2 {
      text-align: center;
      margin-bottom: 32px;
    }

    p {
      text-align: center;
    }
  }

  @media (max-width: 800px) {
    background-image: url(${bgmobile});
  }
`
