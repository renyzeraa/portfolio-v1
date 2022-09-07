import { Container } from './style'
import brasil from '../../../assets/brasil.png'

export function Header() {
  return (
    <Container>
      <div className="logo">
        <p>renyzeraa </p>
        <img
          src={brasil}
          className="bandeira-brasil"
          alt="bandeira do brasil"
        />{' '}
      </div>
    </Container>
  )
}
