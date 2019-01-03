import React from 'react'
import { Button } from 'semantic-ui-react'
import { withStyles, cardExplorer } from 'component-styles'

const Toolbar = props => {
  const { css } = props
  return (
    <div style={css.container}>
      <Button icon='plus' />
      <Button icon='search' />
    </div>
  )
}

export default withStyles(cardExplorer.toolbar)(Toolbar)
