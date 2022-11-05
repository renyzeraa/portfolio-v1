import styled from 'styled-components'
import bgdesktop from '../../assets/bg/bg-home.png'
import bgmobile from '../../assets/bg/bg-home-mob.png'

export const Container = styled.div`
  background-image: url(${bgdesktop});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  main {
    max-width: 1120px;
    margin: 40px auto;
    padding: 0 62px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 40px;

    .title-content {
      font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
      text-transform: uppercase;
      color: ${({ theme }) => theme.COLORS.PURPLE_025};
      text-align: center;
      align-self: center;
      h1 {
        font-size: 118px;
        line-height: 91px;
        margin-bottom: 38px;
        text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.7);
      }
      h2 {
        font-size: 42px;
        line-height: 42px;
        text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.7);
      }
    }

    .img-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 800px) {
    background-image: url(${bgmobile});

    main {
      justify-items: center;
      margin: 0px auto;
      padding: 0 12px;
      gap: 15px;
      .title-content h1 {
        font-size: 72px;
        line-height: 59px;
        margin-bottom: 20px;
      }
      .title-content h2 {
        font-size: 29px;
        line-height: 27px;
      }

      .img-content {
        grid-area: 1;
        margin-bottom: -95px;
        margin-top: -60px;
        img {
          height: 65%;
        }
      }
    }
  }
`
