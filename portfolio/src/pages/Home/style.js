import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 60px;
  > main {
    display: grid;
    justify-items: center;

    section {
      padding: 105px 35px;
    }

    .title-introduction {
      font-family: 'IBM Plex Mono';
      font-weight: 700;
      font-size: 128px;
      line-height: 101px;
      text-transform: uppercase;
      background: linear-gradient(180deg, #b629f8 0%, #800add 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    .home-content {
      display: flex;
      max-width: 1120px;
      width: 100%;
      justify-content: space-between;
      .title-content {
        margin: 30px 0 0 22px;
        position: relative;
        display: grid;
        align-content: space-between;
        .title-name {
          font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
          font-weight: 700;
          font-size: 122px;
          line-height: 100px;
          text-transform: uppercase;
          max-width: 200px;
          color: #141414;

          &::before {
            content: '';
            position: absolute;
            left: -32px;
            top: 8px;
            width: 82px;
            height: 12px;
            background: ${({ theme }) => theme.COLORS.PURPLE_200};
            transform: matrix(0.71, -0.59, 0.85, 0.71, 0, 0);
            z-index: -1;
          }
          &::after {
            content: '';
            position: absolute;
            left: -16px;
            top: 10px;
            width: 82px;
            height: 11px;
            background: ${({ theme }) => theme.COLORS.PURPLE_100};
            transform: matrix(0.71, -0.59, 0.85, 0.71, 0, 0);
            z-index: -1;
          }
        }

        .title-introduction {
          /* margin-top: 82px; */
          max-width: 455px;
          text-align: right;
        }
      }

      .photo-content img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        padding-left: 24px;
      }
    }

    .about-content {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      width: calc(100vw - 17px);

      .content {
        padding: 0 24px;
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .text-content {
          width: 75ch;
          display: grid;
          gap: 12px;
          p {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 29px;

            /* c1 */

            color: ${({ theme }) => theme.COLORS.GRAY_200};
          }
        }

        .title-content {
          max-width: 20ch;
          margin-left: 15px;
          word-break: break-all;
          text-align: right;
          display: inline-block;
        }
      }
    }

    .project-content {
      display: flex;
      max-width: 1120px;
      width: 100%;
      justify-content: space-between;
      .title-content {
        width: 35ch;
        word-break: break-all;
        text-align: left;
      }

      .projects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding-right: 24px;
        position: relative;
        .project {
          padding: 80px;
          border-radius: 10px;
          text-align: center;
          span {
            font-family: 'Fira Sans';
            font-weight: 400;
            font-size: 24px;
            color: black;
            background-color: white;
            padding: 8px;
            border-radius: 4px;
          }
          background-repeat: no-repeat;
          background-position: center left;
          background-size: cover;
          filter: blur(2px);
          :hover {
            transition: 0.5s;
            filter: blur(0px);
            transform: scale(1.1);
          }

          :nth-child(1) {
            background-image: url(https://user-images.githubusercontent.com/101990719/186289394-b1b1dcb5-9700-4abd-9866-ec3f1e6e1caf.png);
          }

          :nth-child(2) {
            background-image: url(https://user-images.githubusercontent.com/101990719/186289394-b1b1dcb5-9700-4abd-9866-ec3f1e6e1caf.png);
          }

          :nth-child(3) {
            background-image: url(https://user-images.githubusercontent.com/101990719/186289394-b1b1dcb5-9700-4abd-9866-ec3f1e6e1caf.png);
          }

          :nth-child(4) {
            background-image: url(https://user-images.githubusercontent.com/101990719/186289394-b1b1dcb5-9700-4abd-9866-ec3f1e6e1caf.png);
          }
        }
      }
    }
  }
`
