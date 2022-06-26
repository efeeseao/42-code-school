import * as S from './styles'

export type LogoProps = {
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  color?: 'white' | 'black'
}

const Logo = ({
  size = 'normal',
  hideOnMobile = false,
  color = 'white'
}: LogoProps) => (
  <S.Wrapper size={size} hideOnMobile={hideOnMobile} color={color}>
    {color === 'white' ? <h1>42CodeSchool</h1> : <h1>42CodeSchool</h1>}
  </S.Wrapper>
)

export default Logo
