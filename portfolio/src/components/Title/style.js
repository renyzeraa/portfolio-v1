import styled from 'styled-components'

export const Container = styled.div`
  font-family: ${({ theme }) => theme.FONTS.FONT_IBM};
  font-weight: 700;
  font-size: 48px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-shadow: 9px 9px 8px rgba(0, 0, 0, 0.7);
  text-align: center;
  margin: 38px auto;

  @media (max-width: 750px) {
    margin: 24px auto;
    font-size: 32px;
  }
`
