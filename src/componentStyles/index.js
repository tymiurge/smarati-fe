import React from 'react'
import cardExplorer from './CardExplorer'

export {
  cardExplorer
}

export const withStyles = styles => Origin => {
  const HOC = () => props => React.cloneElement(<Origin />, {...props, css: styles})
  return HOC()
}
