import { Container } from './style'

export function Title({ children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{children}</h1>
    </Container>
  )
}
