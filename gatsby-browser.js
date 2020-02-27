import 'gatsby-image/withIEPolyfill'

export { wrapRootElement } from './gatsby'

export const onClientEntry = () => {
  const body = document.querySelector('body')

  console.log('body:', body)
}
