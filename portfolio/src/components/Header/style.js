import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;

  #navigation {
    .wrapper {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      height: 80px;
      padding: 16px 24px;

      .logo {
        font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
        font-size: 1.5rem;
        font-weight: 700;
      }
    }

    .btn-nav {
      background: none;
      border: none;
      max-width: min-content;
      z-index: 2;
      svg {
        color: white;
        font-size: 2.4rem;
      }
    }

    .menu,
    .close-menu,
    &.menu-expanded .open-menu {
      opacity: 0;
      visibility: hidden;
      overflow: auto;
    }

    .menu {
      display: none;
      left: -300px;
    }

    &.menu-expanded {
      .menu, .close-menu {
        opacity: 1;
        visibility: visible;
        display: block;
      }

      .close-menu {
        position: absolute;
        right: 24px;
      }

      .menu {
        position: fixed;
        top: 0;
        left: 0;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        width: 100vw;
        height: 100vh;
        text-align: center;
        transition: left 0.9s ease;
        z-index: 2;
        .menu-list{ 
          &:nth-child(1) {
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
            margin-top: 10rem;
            font-weight: 700;
            font-size: 1.8rem;
            font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
            text-transform: lowercase;
          }
        }

        .social-links {
          position: absolute;
          bottom: 40px;
          right: 50%;
          left: 50%;
          font-size: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
      }
      
      .logo {
        position: relative;
        z-index: 100;
      }
    }
  }

  @media (min-width: 750px) {
    #navigation {
      .open-menu,
      .close-menu {
        display: none;
        opacity: 1;
        visibility: visible;
      }

      .wrapper {
        max-width: 1120px;
        margin: 0 auto;
      }

      .menu {
        display: block;
        opacity: 1;
        visibility: visible;

        .menu-list {
          &:first-child {
            display: flex;
            font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
            gap: 24px;

            .menu-option {
              border-bottom: 2px solid transparent;
              transform: translateX(0);
              padding: 8px 0;

              &:hover {
                transition: 0.4s ease-in-out;
                transform: translateY(-5px);
                border-color: white;
              }
            }
          }
        }

        .social-links {
          display: none;
        }
      }
    }
  }
`