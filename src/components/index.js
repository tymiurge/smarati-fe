import React from 'react'
import { layouting } from './layouting'
import { controls } from './controls'
import { domain } from './domain'
import { styles } from './styles'

const withStyles = styles => Origin => {
  const HOC = () => props => React.cloneElement(<Origin />, {...props, css: styles})
  return HOC()
}

export {
  layouting,
  controls,
  domain,
  withStyles,
  styles
}
