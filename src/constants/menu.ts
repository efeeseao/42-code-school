import { v4 } from 'uuid'

import Route, { TRoute } from 'constants/routes'

const navigation = [
  { name: 'Sobre Nós', route: Route.Sobre, id: v4() },
  { name: 'Seja Doador', route: Route.Doar, id: v4() },
  { name: 'Seja Mentor', route: Route.Mentor, id: v4() },
  { name: 'Contatos', route: Route.Contato, id: v4() }
] as Array<{ name: string; route: TRoute; id: string }>

export default navigation
