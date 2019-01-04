import React from 'react'
import { cardExplorer, withStyles } from 'component-styles'
import { Button } from 'semantic-ui-react'
import { layouting } from 'components'

const EditMode = props => {
  const { css } = props
  return (

    <div style={css.container}>
      <layouting.FullNFillInRow>
        <div>
        <Button icon='arrow right' />
        <Button icon='trash' color='red' />
        </div>
        <Button icon='sign-out alternate' />
      </layouting.FullNFillInRow>
    </div>
  )
}
export default withStyles(cardExplorer.toolbar)(EditMode)
