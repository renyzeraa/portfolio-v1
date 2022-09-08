import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
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
            left: -46px;
            top: 3px;
            width: 111px;
            height: 15px;
            background: ${({ theme }) => theme.COLORS.PURPLE_200};
            transform: matrix(0.71, -0.59, 0.85, 0.71, 0, 0);
            z-index: -1;
          }
          &::after {
            content: '';
            position: absolute;
            left: -23px;
            top: 4px;
            width: 111px;
            height: 15px;
            background: ${({ theme }) => theme.COLORS.PURPLE_100};
            transform: matrix(0.71, -0.59, 0.85, 0.71, 0, 0);
            z-index: -1;
          }
        }

        .title-introduction {
          max-width: 455px;
          text-align: right;
          line-height: 80px;
          font-size: 100px;
        }
      }

      .photo-content {
        position: relative;
        .border-img {
          position: absolute;
          top: 20px;
          left: 40px;
        }
        img {
          object-fit: cover;
          object-position: center;
          height: 100%;
          padding-left: 24px;

          border-radius: skew(0deg, -15deg);
        }
      }
    }

    .about-content {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      width: calc(100vw - 23px);

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
            font-size: 22px;
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
      align-items: center;
      .title-content {
        width: 35ch;
        word-break: break-all;
        text-align: left;
      }

      .projects {
        display: grid;
        gap: 12px;

        font-family: 'Fira Sans';
        position: relative;

        .project {
          height: fit-content;
          width: fit-content;
          padding: 24px;
          display: flex;
          gap: 48px;

          background: #f5f5f5;

          border: 1px solid #f0f0f0;
          border-radius: 5px;

          .title {
            font-weight: 700;
            font-size: 18px;
            line-height: 20px;
            color: #000000;
            margin-bottom: 12px;
          }

          p {
            width: 35ch;
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            color: #525252;
          }

          .spans {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            width: 200px;
            span {
              background: black;
              border-radius: 5px;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              color: #dfdfdf;
              padding: 5px 6px;
            }
          }

          &::before {
            content: '';
            position: absolute;
            left: -6px;
            top: 18px;
            width: 6px;
            height: 22px;
            background: linear-gradient(180deg, #b629f8 0%, #800add 100%);
            z-index: -1;
          }
        }

        .project:nth-child(2) {
          ::before {
            top: 153px;
          }
        }
        .project:nth-child(3) {
          ::before {
            top: 286px;
          }
        }
      }
    }

    .formation-content {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      width: calc(100vw - 23px);
      .content {
        padding: 0 24px;
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .formation {
          width: 75ch;
          display: grid;
          gap: 12px;
          align-items: center;
          justify-items: start;

          .course-content {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 20px 12px;

            .courses {
              display: grid;
              gap: 12px;
            }
            h3 {
              margin-bottom: 12px;
              font-family: 'Fira Sans';
              font-style: normal;
              font-weight: 700;
              font-size: 22px;
              line-height: 20px;

              color: #8f8f8f;
            }
            a {
              font-family: 'Fira Sans';
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 20px;

              color: #ffffff;

              span {
                font-family: 'Fira Sans';
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 20px;

                color: #8f8f8f;
              }
            }
          }
          p {
            font-family: 'Fira Sans';
            font-weight: 400;
            font-size: 22px;
            line-height: 35px;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
          }
        }

        .title-content {
          max-width: 35ch;
          line-height: 180px;
          margin-left: 15px;
          word-break: break-all;
          text-align: right;

          .title-introduction {
            line-height: 124px;
          }
        }
      }
    }
  }

  > footer {
    background-color: #000000;

    section {
      padding: 105px 24px 180px;
      max-width: 1120px;
      width: 100%;
      margin: 0 auto;
      color: white;
      display: flex;
      justify-content: space-between;
      position: relative;
      .text {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;

        width: 40ch;

        color: #cccccc;

        &::before {
          content: '';
          position: absolute;
          left: -8px;
          top: -7px;
          width: 111px;
          height: 15px;
          background: ${({ theme }) => theme.COLORS.PURPLE_200};
          transform: matrix(0.71, -0.59, 0.85, 0.71, 0, 0);
          z-index: 2;
        }
        &::after {
          content: '';
          position: absolute;
          left: 11px;
          top: -3px;
          width: 111px;
          height: 15px;
          background: ${({ theme }) => theme.COLORS.PURPLE_100};
          transform: matrix(0.71, -0.59, 0.85, 0.71, 0, 0);
          z-index: 2;
        }
      }
      .contact {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;

        color: #ffffff;

        display: grid;
        gap: 12px;

        ul {
          display: flex;
          justify-content: center;
          gap: 24px;
        }
      }

      .by {
        position: absolute;

        bottom: 12px;
        right: 420px;

        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        /* identical to box height, or 178% */

        text-align: center;

        /* c7 */

        color: #8f8f8f;

        svg {
          color: red;
        }
      }
    }
  }

  /* BACK TO TOP */
  #backToTopButton {
    position: fixed;
    bottom: 1rem;
    right: 4rem;

    opacity: 0;
    visibility: hidden;

    transform: translateY(100%);
    transition: 200ms;
  }

  #backToTopButton.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`
