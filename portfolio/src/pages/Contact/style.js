import styled from 'styled-components'
import bgContact from '../../assets/bg/bgContact.svg'
import bgContactMobile from '../../assets/bg/bgContactMobile.svg'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${bgContactMobile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;

  @media (min-width: 728px){
    background-image: url(${bgContact});
  }
  `