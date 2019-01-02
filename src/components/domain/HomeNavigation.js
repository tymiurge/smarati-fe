import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    padding: '.38em'
  }
}

const HomeNavigation = props => (
  <div style={styles.container}>
    <Popup
      trigger={(<Button icon='home' />)}
      content={'Dashboard'}
      position='right center'
      inverted
    />
  </div>
)

export default HomeNavigation
