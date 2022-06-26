import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'headline' | 'black' | 'primary'
  size?: 'small' | 'medium' | 'large'
}

const Heading = ({
  color = 'headline',
  children,
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
