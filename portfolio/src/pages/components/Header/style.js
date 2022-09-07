import styled from 'styled-components'

export const Container = styled.header`
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    .bandeira-brasil {
      display: block;
      max-width: 40px;
      height: 100%;
    }
    p {
      text-decoration: none;
      color: white;
      font-family: 'IBM Plex Mono';
      font-weight: 400;
      font-size: 48px;
      line-height: 60px;
      color: #141414;
    }
  }
`
