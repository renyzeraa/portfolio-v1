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

  .swipper-container {
    margin-top: 48px;

    .mySwiper {
      .swiper-wrapper {
        .swiper-slide {
          margin-right: 0px !important;

          .card {
            border: 1px solid #ddd;
            padding: 16px;
            margin: 8px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            text-align: left;
            height: 20rem;
            font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
            display: flex;
            flex-direction: column;

            h1 {
              white-space: nowrap;
              font-size: 1.2rem;
              margin-bottom: 8px;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            
            p {
              font-size: 1rem;
              color: #333;
              margin-bottom: 16px;
            }
  
            a {
              margin-top: auto;
              color: black;
            }
  
            a:hover {
              text-decoration: underline;
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

  @media (min-width: 768px) {
    background-image: url(${bgDesktop});
  }
`