import { CardProps } from 'components/Card'
import { Card, Container, Heading } from 'components'

import * as S from './styles'

type ServicesProps = {
  services: CardProps[]
}

const Services = ({ services }: ServicesProps) => (
  <S.Wrapper id="services">
    <Container>
      <S.Header>
        <Heading size="small">
          Nosso trabalho é te ajudar a conseguir o seu
        </Heading>
        <Heading size="medium">Ensino de qualidade é ensino completo.</Heading>
      </S.Header>
      <S.Content>
        <S.Cards>
          {services.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </S.Cards>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default Services
