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
      width: 100vw;
      justify-content: space-between;
      .title-content {
        margin: 30px 0 0 22px;
        position: relative;

        .title-name {
          font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
          font-weight: 700;
          font-size: 94px;
          line-height: 80px;
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
          margin-top: 82px;
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
      background: #141414;
      width: calc(100vw - 20px);

      .content {
        padding: 0 80px;
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .text-content {
          max-width: 75ch;
        }

        .title-content {
          max-width: 25ch;
          word-break: break-all;
          text-align: right;
        }
      }
    }
  }
`
