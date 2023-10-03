import styled from 'styled-components'
import bgHome from '../../assets/bg/bgHome.svg'
import bgHomeMobile from '../../assets/bg/bgHomeMobile.svg'

export const Container = styled.div`
  overflow: auto;
  height: 100vh;
  background-image: url(${bgHomeMobile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    .column {
      text-align: center;

      &.img-profile {
        display: flex;
        justify-content: center;
      }
    }
    
    .title {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.70);
      font-family: IBM Plex Mono;
      font-size: 25vw;
      line-height: 91px;
      text-transform: uppercase;
    }

    .description {
      margin-top: 1rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      text-align: center;
      text-shadow: 3px 4px 1px ${({ theme }) => theme.COLORS.BLACK};
      font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
      font-size: 9vw;
      font-weight: 700;
      line-height: 42px;
      text-transform: uppercase;
      max-width: 100%;
    }
  }


@media (min-width: 455px) {
  .container {
    .title {
      font-size: 6.2rem;
    }

    .description { 
      font-size: 2.5rem;
    }
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    
    .column {
      width: 100%;
      margin-bottom: 20px;
  
      &.img-profile {
        width: 80%;
      margin: 0 auto;
      }
    }
  }
}

@media (min-width: 800px) {
  background-image: url(${bgHome});

  .container {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 48px auto;

    .column {
      width: 50%; 
      padding: 20px;
    }
  }
}
`