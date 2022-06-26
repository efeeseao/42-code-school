import { Button, Container, Heading } from 'components'

import * as S from './styles'

const Hero = () => (
  <S.Wrapper>
    <Container className="wrapper">
      <S.ColumnA>
        <S.Header>
          <Heading size="medium" color="headline">
            Transformando jovens do gueto em programadores.GRATUITAMENTE.
          </Heading>
          <S.Content>
            <p>
              Eu observei que uma parcela significativa dos desempregados de
              Angola mora nos guetos e há estudos que mostram que o déficit de
              profissionais de tecnologia pode chegar a meio milhão até 2025.
              Então, pensei: porque não qualificar essa gente para o mercado de
              trabalho?.
            </p>
            <S.WrapperButton>
              <a
                href="https://forms.gle/hKFoAFqFcQyE7CTM9"
                target="_blank"
                rel="noreferrer"
              >
                <Button as="a" size="large">
                  Quero ser aluno
                </Button>
              </a>
            </S.WrapperButton>
          </S.Content>
        </S.Header>
      </S.ColumnA>
      <S.ColumnB>
        <S.Image src="/img/hero.jpg" alt="Hero" />
      </S.ColumnB>
    </Container>
  </S.Wrapper>
)

export default Hero
