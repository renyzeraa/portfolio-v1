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
        display: flex;
        font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_CODE};
        height: 425px;
        max-height: 100%;

        .line-numbers {
          flex: 0 0 40px;
          background-color: #333;
          color: #ccc;
          padding: 10px;
          text-align: right;
          border-right: 1px solid #555;
          height: 100%;
          border-radius: 8px 0px 0px 8px;
          
          .line-number {
            margin-bottom: 5px;
          }
        }

        .code-content {
          flex: 1;
          padding: 10px;
          background-color: #f5f5f5;
          width: 100%;
          height: 100%;
          border-radius: 0px 8px 8px 0px;
          .code-line {
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
    color: var(--c1, #F5F5F5);
    font-family: Fira Code;
    font-size: 24px;
    font-style: normal;
    font-weight: 450;
    line-height: normal;
  }

  input, textarea {
    border-radius: 8px;
    border: 1px solid var(--c12, #292929);
    background: var(--c12, #292929);
    height: 2.5rem;
    padding: 8px;
    font-size: 18px;
    color: var(--c1, #F5F5F5);
  }

  textarea {
    height: 100%;
    resize: none;
  }
`
export const Button = styled.button`
  border: none;
  border-radius: 8px;
  background: var(#F0F0F0);
  display: flex;
  width: 185px;
  height: 48px;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: var(#292929);
  text-align: right;
  font-family: Fira Code;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  &:hover {
    background: #292929;
    color: #F0F0F0;

    transition: background 0.8s ease-out;
  }
`
