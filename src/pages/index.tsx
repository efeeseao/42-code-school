import { HomeProps } from 'templates/Home'
import { Home } from 'templates'

import servicesMock from 'components/Services/mock'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      services: servicesMock
    }
  }
}
