import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: 8px;
  width: 100vw;
  display: flex;
  justify-content: center;
  p {
    font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_SANS};
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`
