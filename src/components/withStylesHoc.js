import React from 'react'

export default styles => Origin => {
  const HOC = () => props => React.cloneElement(<Origin />, {...props, css: styles})
  return HOC()
}