import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  pointer-events: unset;
  gap: 12px;


  .loading-spinner {
    border: 6px solid ${({ theme }) => theme.COLORS.GRAY_100};
    border-top: 6px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }
  p {
    font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_SANS};
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`