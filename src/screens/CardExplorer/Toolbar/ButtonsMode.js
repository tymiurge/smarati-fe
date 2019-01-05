import React from 'react'
import { Button } from 'semantic-ui-react'
import { layouting, styles, withStyles } from 'components'

const ButtonsMode = props => {
  const { css, onCardAddRequest, onSearchClick, onEditModeRequest } = props
  return (
    <div style={css.container}>
      <layouting.FullNFillInRow>
        <div>
          <Button icon='plus' onClick={onCardAddRequest}/>
          <Button icon='search' onClick={onSearchClick}/>
        </div>
        <Button icon='edit' onClick={onEditModeRequest}/>
      </layouting.FullNFillInRow>
    </div>
  )
}

export default withStyles(styles.cardExplorer.toolbar)(ButtonsMode)
