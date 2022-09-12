import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  > main {
    display: grid;
    justify-content: center;

    section {
      width: 112rem;
      padding: 21rem 2.4rem 0;
    }

    .title-introduction {
      font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
      font-size: 12.8rem;
      line-height: 10.1rem;
      text-transform: uppercase;
      text-shadow: 1.9rem 2rem 1.9rem #000000;
      color: ${({ theme }) => theme.COLORS.PURPLE_050};
    }

    .home-content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .title-content {
        .title-name {
          font-family: 'Annie Use Your Telescope', cursive;
          font-weight: 400;
          font-size: 16.5rem;
          line-height: 12.2rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
          text-shadow: 1.5rem 1.2rem 1.1rem #000000;
        }
      }

      .photo-content {
        position: relative;

        .title-dev {
          font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
          font-size: 4.2rem;
          line-height: 3.4rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
          text-shadow: 0.8rem 1rem 0.4rem rgb(0 0 0 / 45%);
          position: absolute;
          left: 5.2rem;
          top: 11.8rem;
        }

        .border-img {
          position: absolute;
          top: 1.4rem;
          left: 4.5rem;
        }
        img {
          object-fit: cover;
          object-position: center;
          height: 100%;
          padding-left: 2.4rem;

          border-radius: skew(0deg, -15deg);
        }
      }
    }

    .about-content {
      display: flex;
      justify-content: space-between;

      .text-content {
        width: 110ch;
        display: grid;
        gap: 1.2rem;

        p {
          font-family: ${({ theme }) => theme.FONTS.FONT_FIRA};
          font-size: 2.2rem;
          line-height: 2.9rem;
          color: ${({ theme }) => theme.COLORS.GRAY_200};
        }

        .techs-content {
          ul {
            padding: 2.4rem 2.4rem 0;
            display: flex;
          }
        }
      }

      .title-content {
        max-width: 32ch;
        margin-left: 1.5rem;
        word-break: break-all;
        text-align: right;
        display: inline-block;
      }
    }

    .project-content {
      display: flex;
      justify-content: space-between;

      .title-content {
        width: 47ch;
        word-break: break-all;
        text-align: left;
      }

      .projects {
        display: flex;
        gap: 2.8rem;
        font-family: ${({ theme }) => theme.FONTS.FONT_FIRA};
        position: relative;

        .btn-git {
          position: absolute;
          bottom: -7rem;
          background-color: ${({ theme }) => theme.COLORS.WHITE};
          padding: 1.2rem 1.2rem;
          border-radius: 1rem;
          left: 19.2rem;
          box-shadow: 1.5rem 1.5rem 0.8rem rgb(0 0 0 / 45%);

          &:hover {
            transition: 0.5s;
            transform: scale(1.05);
          }
        }

        .project {
          width: 19rem;
          padding: 1.6rem;
          background: #f5f5f5;
          border: 1px solid #f0f0f0;
          border-radius: 5px;
          text-align: center;
          box-shadow: 1.5rem 1.5rem 0.8rem rgb(0 0 0 / 45%);

          &:hover {
            transition: 0.8s;
            box-shadow: 0px 1px 2rem 1rem rgb(255 254 254 / 45%);
          }

          .about-project {
            .title {
              font-size: 1.8rem;
              color: ${({ theme }) => theme.COLORS.BLACK};
              margin-bottom: 1.2rem;
            }

            img {
              border-radius: 5px;
              object-position: center top;
              object-fit: cover;
              height: 8rem;
              width: 100%;
              margin-bottom: 1.2rem;
            }

            p {
              line-height: 2rem;
              color: ${({ theme }) => theme.COLORS.GRAY_300};
              height: 20ch;

              font-size: 1.5rem;
            }
          }

          .spans {
            display: flex;
            justify-content: space-between;
            span {
              background: black;
              border-radius: 0.5rem;
              font-size: 1.4rem;
              line-height: 2rem;
              color: #dfdfdf;
              padding: 0.4rem 0.3rem;
            }
          }

          &::before {
            content: '';
            position: absolute;
            left: 1.5rem;
            top: -0.5rem;
            width: 6rem;
            height: 6rem;
            background: linear-gradient(180deg, #b629f8 0%, #800add 100%);
            z-index: -1;
          }
        }

        .project:nth-child(2) {
          ::before {
            left: 23.3rem;
          }
        }
        .project:nth-child(3) {
          ::before {
            left: 45.1rem;
          }
        }
      }
    }

    .formation-content {
      padding-bottom: 14rem;
      .content {
        display: flex;
        justify-content: space-between;
        font-family: ${({ theme }) => theme.FONTS.FONT_FIRA};
        .formation {
          p {
            width: 42ch;
          }

          display: grid;
          gap: 2.2rem;
          align-items: center;
          justify-items: start;

          .course-content {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 2.4rem 1.4rem;

            svg {
              font-size: 2.2rem;
              color: ${({ theme }) => theme.COLORS.GRAY_100};
            }

            .courses {
              display: grid;
              gap: 1.2rem;
            }
            h3 {
              margin-bottom: 1.2rem;
              font-size: 2.2rem;
              color: ${({ theme }) => theme.COLORS.GRAY_200};
            }
            a {
              font-size: 1.8rem;
              line-height: 2rem;
              color: ${({ theme }) => theme.COLORS.GRAY_100};

              span {
                font-size: 1.8rem;
                line-height: 2rem;
                color: #8f8f8f;
              }
            }
          }
          p {
            font-size: 2.2rem;
            line-height: 3.5rem;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
          }
        }

        .title-content {
          max-width: 42ch;
          line-height: 18rem;
          margin-left: 1.5rem;
          word-break: break-all;
          text-align: right;

          .title-introduction {
            line-height: 12.4rem;
          }
        }
      }
    }
  }

  > footer {
    font-family: ${({ theme }) => theme.FONTS.FONT_FIRA};
    section {
      padding: 10.5rem 2.4rem 18rem;
      width: 112rem;

      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      position: relative;

      .text {
        font-size: 2.4rem;
        line-height: 3.2rem;
        width: 40ch;
        color: ${({ theme }) => theme.COLORS.GRAY_200};

        &::before {
          content: '';
          position: absolute;
          left: -0.8rem;
          top: -0.7rem;
          width: 11.1rem;
          height: 1.5rem;
          background: ${({ theme }) => theme.COLORS.PURPLE_200};
          transform: matrix(0.71, -0.59, 0.85, 0.71, 0, 0);
          z-index: 2;
        }
        &::after {
          content: '';
          position: absolute;
          left: 1.1rem;
          top: -0.3rem;
          width: 11.1rem;
          height: 1.5rem;
          background: ${({ theme }) => theme.COLORS.PURPLE_100};
          transform: matrix(0.71, -0.59, 0.85, 0.71, 0, 0);
          z-index: 2;
        }
      }
      .contact {
        font-size: 3.6rem;
        color: #ffffff;
        display: grid;
        gap: 1.2rem;

        ul {
          display: flex;
          justify-content: center;
          gap: 2.4rem;

          svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            &:hover {
              transition: 0.7s;
              transform: scale(1.2);
            }
          }
        }
      }

      .by {
        position: absolute;
        bottom: 1.2rem;
        right: 42rem;
        font-size: 1.8rem;
        line-height: 3.2rem;
        text-align: center;
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
