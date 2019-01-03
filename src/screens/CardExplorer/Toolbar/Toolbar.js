import React from 'react'
import { Button } from 'semantic-ui-react'

const styles = {
  toolbarContainer: {
    width: '100%',
    height: '100%',
    padding: '.38em'
  }
}

const Toolbar = props => {
  return (
    <div style={styles.toolbarContainer}>
      <Button icon='plus' />
      <Button icon='search' />
    </div>
  )
}

export default Toolbar
