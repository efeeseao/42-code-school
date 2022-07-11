import Link from 'next/link'

import { Container, Logo } from 'components'

import mediaLinks from './mock'

import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <Container className="wrapper">
        <S.ColumnA>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <p>
            © {currentYear} 42 Code School. <br />
            Todos os direitos reservados.
          </p>
        </S.ColumnA>
        <S.ColumnB>
          <ul className="social-links">
            {mediaLinks.map(({ icon, id, path, target }) => (
              <li key={id}>
                <a href={path} target={target}>
                  <S.Icon src={icon} alt={path} />
                </a>
              </li>
            ))}
          </ul>
        </S.ColumnB>
      </Container>
    </S.Wrapper>
  )
}
export default Footer
