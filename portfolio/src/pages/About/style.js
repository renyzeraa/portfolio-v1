import styled from 'styled-components'
import bgdesktop from '../../assets/bg/bg-about.png'
import bgmobile from '../../assets/bg/bg-about-mob.png'

export const Container = styled.div`
  background-image: url(${bgmobile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  main {
    max-width: 1020px;
    margin: 0 auto;
    padding-bottom: 80px;
    p {
      font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_SANS};
      font-size: 22px;
      line-height: 26px;
      text-align: center;
      margin-bottom: 28px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .tech-icons {
      display: flex;
      justify-content: center;
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 215px;
        gap: 20px;
      }
    }
  }

  @media (min-width: 750px) {
    background-image: url(${bgdesktop});
    height: 100vh;
    main {
      padding: 0 50px;
      .tech-icons {
        margin-top: 90px;
        ul {
          display: flex;
          flex-wrap: nowrap;
          align-content: center;
          width: max-content;
          max-width: 100%;
        }
      }
    }
  }
`
