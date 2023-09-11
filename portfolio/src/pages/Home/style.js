import styled from 'styled-components'
import bgHome from '../../assets/bg/bg-home.png'
import bgHomeMobile from '../../assets/bg/bg-home-mob.png'

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
      color: var(--c2, #F0F0F0);
      text-shadow: 7px 7px 5px rgba(0, 0, 0, 0.70);
      font-family: IBM Plex Mono;
      font-size: 28vw;
      line-height: 91px;
      text-transform: uppercase;
    }

    .description {
      margin-top: 1rem;
      color: var(--c1, #F5F5F5);
      text-align: center;
      text-shadow: 3px 4px 1px #000;
      font-family: IBM Plex Mono;
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
      font-size: 7.5rem;
    }

    .description { 
      font-size: 2.94rem;
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