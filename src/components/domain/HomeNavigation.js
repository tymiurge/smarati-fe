import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import css from './../styles/domain/index'

const HomeNavigation = props => (
  <div style={css.container}>
    <Popup
      trigger={(<Button icon='home' />)}
      content={'Dashboard'}
      position='right center'
      inverted
    />
  </div>
)

export default HomeNavigation
