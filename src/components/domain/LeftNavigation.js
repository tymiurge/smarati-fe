import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

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
      trigger={(<Button icon='sticky note' />)}
      content={<div style={{marginLeft: '8px'}}>Card Explorer</div>}
      position='right'
      inverted
    />
    <Button icon='tasks' style={{marginTop: '.38em'}}/>
    <Button icon='find' style={{marginTop: '.38em'}}/>
    <Button icon='area chart' style={{marginTop: '.38em'}}/>
  </div>
)

export default LeftNavigation
