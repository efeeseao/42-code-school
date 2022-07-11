import { Button, Container, Heading } from 'components'

import mockInfo from './mock'

import * as S from './styles'

const Contact = () => (
  <S.Wrapper id="contacts">
    <Container className="wrapper">
      <S.ColumnA>
        <S.Header>
          <Heading size="medium">Entre em contato conosco!</Heading>
        </S.Header>

        <S.Content>
          <ul>
            {mockInfo.map(({ icon, id, title }) => (
              <li key={id}>
                <S.Icon src={icon} alt={title} />
                {title}
              </li>
            ))}
          </ul>
          <a
            href="https://forms.gle/NQKodxeeScj6jJBH"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="medium">Quero Fazer doação</Button>
          </a>
        </S.Content>
      </S.ColumnA>
    </Container>
  </S.Wrapper>
)

export default Contact
