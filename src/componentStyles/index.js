import React from 'react'
import cardExplorer from './CardExplorer'

export {
  cardExplorer
}

export const withStyles = styles => Origin => {
  const HOC = () => () => React.cloneElement(<Origin />, {css: styles})
  return HOC()
}
