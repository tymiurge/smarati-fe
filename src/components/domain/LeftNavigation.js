import React from 'react'
import { Button, Popup, Icon } from 'semantic-ui-react'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    padding: '.38em'
  }
}

const LeftNavigation = props => (
  <div style={styles.container}>
    <Popup
      trigger={(<Button icon='sticky note' color='blue'/>)}
      content={'Card Explorer'}
      position='right center'
      inverted
    />
    <Popup
      trigger={(<Button icon='tasks' style={{marginTop: '.38em'}}/>)}
      content={'Learning Programs'}
      position='right center'
      inverted
    />
    <Popup
      trigger={(<Button icon='find' style={{marginTop: '.38em'}}/>)}
      content={'Community Decks'}
      position='right center'
      inverted
    />
    <Popup
      trigger={(<Button icon='area chart' style={{marginTop: '.38em'}}/>)}
      content={'Statistics'}
      position='right center'
      inverted
    />
  </div>
)

export default LeftNavigation
