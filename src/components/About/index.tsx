import { Container, Heading } from 'components'

import * as S from './styles'

const About = () => (
  <S.Wrapper id="about">
    <Container className="wrapper">
      <S.ColumnA>
        <S.Header>
          <Heading size="small">Sobre nós</Heading>
          <Heading size="medium">
            Entenda quem somos e por que existimos
          </Heading>
        </S.Header>
        <S.Content>
          <p>Nossa missão é inserir pessoas do gueto na área de tecnologia.</p>
          <p>
            Sabemos que a área de desenvolvimento de software e tecnologia é
            grande e continua crescendo. É uma área de acesso democrático, pois
            o conteúdo necessário para trabalhar com isso está (quase sempre)
            livre e aberto na internet, mas para pessoas do gueto, com menos
            acesso a informação, ainda falta um certo apoio.
          </p>
          <p>
            Como comunidade queremos focar em inserir e instruir essas pessoas o
            mais rápido no mercado de trabalho, pois temos a vivência de pessoas
            que vieram do gueto e confirmamos que depois que entramos nesta área
            a nossa vida mudou 100%.
          </p>
          <p>
            Nós estamos aqui para levar a informação para o gueto e servir de
            grupo de apoio para que essas pessoas tenham as oportunidades que
            não tiveram ainda para chegar nesse universo.
          </p>
          <p>
            Com a nossa comunidade queremos formar uma rede de apoio para
            pessoas do gueto entrarem na área de programação e/ou crescerem
            nessa área.
          </p>
        </S.Content>
      </S.ColumnA>
      <S.ColumnB>
        <S.Image src="/img/about.jpg" alt="About" />
      </S.ColumnB>
    </Container>
  </S.Wrapper>
)

export default About
