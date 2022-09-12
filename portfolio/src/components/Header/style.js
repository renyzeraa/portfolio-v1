import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.PURPLE_300};
  position: fixed;
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
    .logo {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      .bandeira-brasil {
        margin-top: 0.8rem;
        display: block;
        max-width: 4rem;
        height: 100%;
      }
      p {
        font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
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
            font-family: ${({ theme }) => theme.FONTS.FONT_FIRA};
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            padding-bottom: 0.8rem;

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

    .social {
      position: absolute;
      background: linear-gradient(180deg, #b629f8 0%, #800add 100%);
      padding: 0.5rem 1.6rem;
      border-radius: 0 0 0.5rem 0.5rem;
      left: 2.4rem;
      top: 8rem;
      display: flex;
      gap: 1.6rem;
      transition: 0.5s;
      svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        font-size: 2.8rem;

        :hover {
          transform: scale(1.1);
        }
      }
    }
  }
`
