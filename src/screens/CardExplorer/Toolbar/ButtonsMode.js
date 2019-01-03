import React from 'react'
import { Button } from 'semantic-ui-react'
import { withStyles, cardExplorer } from 'component-styles'
import { layouting } from 'components'

const ButtonsMode = props => {
  const { css, onCardAddRequest, onSearchClick, onRemoveModeRequest } = props
  return (
    <div style={css.container}>
      <layouting.FullNFillInRow>
        <div>
          <Button icon='plus' onClick={onCardAddRequest}/>
          <Button icon='search' onClick={onSearchClick}/>
        </div>
        <Button icon='trash' color='red' onClick={onRemoveModeRequest}/>
      </layouting.FullNFillInRow>
    </div>
  )
}

export default withStyles(cardExplorer.toolbar)(ButtonsMode)
