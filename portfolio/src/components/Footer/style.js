import styled from 'styled-components'

export const Container = styled.div`

  p {
    font-family: ${({ theme }) => theme.FONTS.FONT_FIRA_SANS};
    font-size: 16px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`
