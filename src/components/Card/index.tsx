import * as S from './styles'

export type CardProps = {
  title: string
  icon: string
  text: string
}

const Card = ({ icon, text, title }: CardProps) => (
  <S.Wrapper>
    <S.Icon src={icon} alt={title} />
    <S.Title>{title}</S.Title>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default Card
