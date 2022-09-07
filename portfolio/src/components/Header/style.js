import styled from 'styled-components'

export const Container = styled.div`
  a {
    text-decoration: none;
  }
  width: 100%;
  border-bottom: 1px solid #a839ff;
  background-color: #dadada;
  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 24px;
    max-width: 1120px;
    margin: 0 auto;
    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      .bandeira-brasil {
        margin-top: 8px;
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

    .menu-nav {
      ul {
        display: flex;
        list-style: none;
        gap: 8px;

        li a {
          font-family: 'Fira Sans', sans-serif;
          font-weight: 400;
          font-size: 22px;
          line-height: 60px;
          color: #141414;
        }
      }
    }
  }
`
