import { CardProps } from 'components/Card'
import { About, Contact, Hero, Services } from 'components'
import { Base } from 'templates'

export type HomeProps = {
  services: CardProps[]
}
const Home = ({ services }: HomeProps) => (
  <Base>
    <Hero />
    <Services services={services} />
    <About />
    <Contact />
  </Base>
)

export default Home
