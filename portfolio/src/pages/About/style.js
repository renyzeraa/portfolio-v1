import styled from 'styled-components'
import bgAbout from '../../assets/bg/bg-about.png'
import bgAboutMobile from '../../assets/bg/bg-about-mob.png'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${bgAboutMobile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;

  .main-container {
    .container {
      margin-top: 40px;
      
      .technologies-container {
        width: 100%;
        margin-top: 40px;
        margin-bottom: 120px;
        .techs-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-evenly;
          gap: 20px;

          li {
            flex: 0 0 60px;
          }
        }
      }
    }
  }

  @media (min-width: 728px) {
    background-image: url(${bgAbout});
  }

`

export const Text = styled.p`
  color:  ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_SANS};
  font-size: 22px;
  line-height: normal;
  margin-bottom: 1.4rem;

  a {
    font-weight: 500;
    text-decoration: underline;
  }
`