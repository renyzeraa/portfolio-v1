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

  

  .main-container {
    padding: 0 48px;
    
    &.wrapper {
      > div {
        font-size: 28px;
      }
    }

    .swipper-container {
      margin-top: 48px;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      padding: 0 4px;
      border-radius: 8px;
      box-shadow: 0px 0px 16px 8px ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
      .mySwiper {
        .swiper-wrapper {
          .swiper-slide {
            margin-right: 0px !important;
  
            .card {
              border: 1px solid ${({ theme }) => theme.COLORS.BORDER_GRAY_100};;
              padding: 16px;
              margin: 8px;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              background-color: ${({ theme }) => theme.COLORS.WHITE};;
              text-align: left;
              height: 20rem;
              font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
              display: flex;
              flex-direction: column;
              
              &:hover {
                transform: scale(1.03);
                transition: transform 0.5s ease;
              }
  
              .title {
                white-space: wrap;
                font-size: 1.2rem;
                margin-bottom: 8px;
                overflow: hidden;
                text-overflow: ellipsis;
                min-height: 3rem;
              }
              
              .description {
                font-size: 1rem;
                color: ${({ theme }) => theme.COLORS.GRAY_500};
                margin-bottom: 16px;
              }
    
              .footer {
                margin-top: auto;
  
                .infos, .forks, .starred, .icon-language {
                  display: flex;
                  align-items: center;
                  margin-right: 0.5rem;
                }
  
                .infos {
                  margin-bottom: 0.5rem;
                }
  
                .icon-language {
                  font-size: 1.5rem;
                }
  
                .link-github {
                  color: black;
                  
                  &:hover {
                   text-decoration: underline;
                  }
                }
              }
            }
          }
        }
        .swiper-button-prev{
          left: 0px;
        }
        .swiper-button-next {
          right: 0px;
        }
      }
    }
  }


  @media (min-width: 768px) {
    background-image: url(${bgDesktop});

    .main-container {
      padding: 0 52px;
      height: 100%;

      &.wrapper {
        > div {
          font-size: 34px;
        }
      }
    }
  }

  @media (min-width: 1200px) { 
    .main-container {
      padding: 0 24px;
    }
  }
`