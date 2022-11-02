import styled from 'styled-components'
import bg from '../../assets/bg/bg-home.png'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${bg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  main {
    max-width: 1120px;
    margin: 40px auto;
    padding: 0 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .title-content {
      font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
      text-transform: uppercase;
      color: white;
      text-align: center;

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
  }
`
