import React from 'react'
import { Button } from 'semantic-ui-react'
import { withStyles, cardExplorer } from 'component-styles'

const ButtonsMode = props => {
  const { css, onCardAddRequest, onSearchClick } = props
  return (
    <div style={css.container}>
      <Button icon='plus' onClick={onCardAddRequest}/>
      <Button icon='search' onClick={onSearchClick}/>
    </div>
  )
}

export default withStyles(cardExplorer.toolbar)(ButtonsMode)
