import styled from 'styled-components'
import bgContact from '../../assets/bg/bgContact.svg'
import bgContactMobile from '../../assets/bg/bgContactMobile.svg'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${bgContactMobile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;

  .main-container {
    padding: 0 56px;

    .form-container {
      margin-bottom: 48px;
    }

    .code-card {
      display: none;
    }
  }


  @media (min-width: 728px){
    background-image: url(${bgContact});

    .main-container {
      padding: 0 48px;
      
      .code-card {
        margin-top: 24px;
        flex: 1;
        background-color: ${({ theme }) => theme.COLORS.BG_DRACULA_800};
        color: ${({ theme }) => theme.COLORS.WHITE_TEXT};
        border: 1px solid ${({ theme }) => theme.COLORS.BG_DRACULA_600};
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
        height: 425px;
        max-height: 100%;

        .line-numbers {
          background-color: ${({ theme }) => theme.COLORS.BG_DRACULA_600};
          padding: 16px 0;
          text-align: right;
          padding-right: 8px;  
          background-color: ${({ theme }) => theme.COLORS.BG_DRACULA_600};
          padding: 16px 0;
          text-align: right;
          padding-right: 8px;
          border-right: 1px solid ${({ theme }) => theme.COLORS.GRAY};
          height: 100%;
          border-radius: 8px 0px 0px 8px;
          
          .line-number {
            color: ${({ theme }) => theme.COLORS.DRACULA_TEXT};
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 5px;
          }
        }

        .code-content {
          flex: 1;
          padding: 16px;
          flex-grow: 1;
          overflow-x: auto;
          width: 100%;
          height: 100%;
          border-radius: 0px 8px 8px 0px;

          .code-line {
            white-space: pre;
            margin: 0;
            font-size: 14px;
            line-height: 1.6;
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        }
      }
      .form-container {
        flex: 1;
      }
    }
  }

  @media (min-width: 820px){
    .main-container {
      .container {
        display: flex;
        gap: 12px;
        height: 100%;
        margin-top: 28px;
      }
    }
  }

  @media (min-width: 1200px){
    .main-container {
      padding: 0 24px;
    }
  }
`
export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1rem;

  label {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
    font-size: 24px;
    font-style: normal;
    font-weight: 450;
    line-height: normal;
  }

  input, textarea {
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.BG_DRACULA_800};
    background: ${({ theme }) => theme.COLORS.BG_DRACULA_800};
    height: 2.5rem;
    padding: 8px;
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  textarea {
    height: 100%;
    resize: none;
  }
`
export const Button = styled.button`
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  width: 185px;
  height: 48px;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  text-align: right;
  font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    transition: background 0.8s ease-out;
  }
`
