import Link from 'next/link'

import { Logo } from 'components'

import navigation from 'constants/menu'
import * as S from './styles'

const Header = () => (
  <S.Header>
    <Link href="/">
      <a>
        <Logo color="white" />
      </a>
    </Link>
    <S.Menu>
      {navigation.map(({ id, name, route }) => (
        <S.MenuOption key={id.toString()}>
          <Link href={route.toString()} passHref>
            <a>{name}</a>
          </Link>
        </S.MenuOption>
      ))}
    </S.Menu>
  </S.Header>
)

export default Header
