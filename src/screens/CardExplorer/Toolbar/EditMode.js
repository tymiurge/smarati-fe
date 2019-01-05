import React from 'react'
import { cardExplorer, withStyles } from 'component-styles'
import { Button } from 'semantic-ui-react'
import { layouting, controls } from 'components'

const EditMode = props => {
  const { css } = props
  return (
    <div style={css.container}>
      <layouting.FullNFillInRow>
        <div>
          <controls.DropdownSubmitter />
          <Button icon='trash' color='red' />
        </div>
        <Button icon='sign-out alternate' color='blue'/>
      </layouting.FullNFillInRow>
    </div>
  )
}
export default withStyles(cardExplorer.toolbar)(EditMode)
