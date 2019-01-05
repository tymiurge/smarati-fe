import React from 'react'
import { Button } from 'semantic-ui-react'
import { layouting, controls, styles, withStyles } from 'components'

const EditMode = props => {
  const { css } = props
  return (
    <div style={css.container}>
      <layouting.FullNFillInRow>
        <div>
          <controls.DropdownSubmitter />
          <Button icon='trash' color='red' />
        </div>
        <Button
          icon='sign-out alternate' color='blue'
          onClick={props.onExitClick}
        />
      </layouting.FullNFillInRow>
    </div>
  )
}
export default withStyles(styles.cardExplorer.toolbar)(EditMode)
