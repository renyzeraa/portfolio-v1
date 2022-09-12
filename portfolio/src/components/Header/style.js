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
    height: 80px;
    padding: 0 24px;
    max-width: 1120px;
    margin: 0 auto;
    position: relative;
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
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    .menu-nav {
      ul {
        display: flex;
        gap: 24px;
        align-items: center;

        li {
          a {
            font-family: ${({ theme }) => theme.FONTS.FONT_FIRA};
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            padding-bottom: 8px;

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
      padding: 5px 16px;
      border-radius: 0 0 5px 5px;
      left: 24px;
      top: 80px;
      display: flex;
      gap: 16px;
      transition: 0.5s;
      svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
        font-size: 28px;

        :hover {
          transform: scale(1.1);
        }
      }
    }
  }
`
