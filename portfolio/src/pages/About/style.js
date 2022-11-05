import styled from 'styled-components'
import bgdesktop from '../../assets/bg/bg-about.png'
import bgmobile from '../../assets/bg/bg-about-mob.png'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${bgmobile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 750px) {
    background-image: url(${bgdesktop});
  }
`
