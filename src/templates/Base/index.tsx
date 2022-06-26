import { Footer, Header } from 'components'
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <S.HeaderContent>
      <Header />
    </S.HeaderContent>
    <S.ContentWrapper>{children}</S.ContentWrapper>
    <S.FooterContent>
      <Footer />
    </S.FooterContent>
  </S.Wrapper>
)

export default Base
