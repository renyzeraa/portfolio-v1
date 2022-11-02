import { Container } from './style'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export function Socials() {
  return (
    <Container>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/renyzeraa/" target="_blank">
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.github.com/renyzeraa/" target="_blank">
            <AiFillGithub />
          </a>
        </li>
      </ul>
    </Container>
  )
}
