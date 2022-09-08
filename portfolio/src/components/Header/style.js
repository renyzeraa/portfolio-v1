import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.PURPLE_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  position: fixed;
  top: 0;
  z-index: 999;
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
        font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
        font-size: 34px;
        color: ${({ theme }) => theme.COLORS.BLACK};
      }
    }

    .menu-nav {
      ul {
        display: flex;
        gap: 12px;
        align-items: center;

        li a {
          font-family: ${({ theme }) => theme.FONTS.FONT_FIRA};
          font-size: 18px;
          color: ${({ theme }) => theme.COLORS.BLACK};
        }
      }
    }
  }
`
