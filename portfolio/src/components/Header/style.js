import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding: 0 2.4rem;
    max-width: 112rem;
    margin: 0 auto;
    position: relative;
    font-weight: 700;
    .logo {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      p {
        font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
        font-size: 3.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    .menu-nav {
      ul {
        display: flex;
        gap: 2.4rem;
        align-items: center;

        li {
          a {
            font-weight: 500;
            font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            padding-bottom: 0.8rem;
            line-height: 60px;
            position: relative;

            &::after {
              content: '';
              width: 0%;
              height: 2px;
              background: WHITE;

              position: absolute;
              left: 0;
              bottom: -0.5rem;

              transition: width 0.2s;
            }

            &:hover {
              font-weight: bold;
              color: WHITE;

              ::after {
                width: 100%;
              }
            }
          }
        }
      }
    }

    @media (max-width: 700px) {
      .menu-nav {
        display: block;
      }
    }
  }
`
