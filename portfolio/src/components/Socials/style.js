import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  font-size: 2.4rem;
  left: 8px;
  top: 40%;
  bottom: 60%;
  
  li {
    padding-bottom: 10px;
    &:hover {
      transition: 0.8s;
      transform: scale(1.1);
    }
  }

  @media (max-width: 750px) {
    bottom: 10%;
    top: auto;
  }
`
