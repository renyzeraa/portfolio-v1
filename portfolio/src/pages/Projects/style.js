import styled from 'styled-components'
import bgDesktop from '../../assets/bg/bgProjects.svg'
import bgMobile from '../../assets/bg/bgProjectsMobile.svg'

export const Container = styled.div`
  overflow: auto;
  height: 100vh;
  background-image: url(${bgMobile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url(${bgDesktop});
  }
`