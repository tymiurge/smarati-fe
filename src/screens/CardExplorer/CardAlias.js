import React from 'react'
import { Segment, Header, Label, Icon } from 'semantic-ui-react'
import { layouting, controls } from 'components'
import PropTypes from 'prop-types'
import { cardExplorer, withStyles } from 'component-styles'

const propTypes = {
  content: PropTypes.string.isRequired,
  progress: PropTypes.number,
  editMode: PropTypes.bool,
  onEditClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
}

const defaultProps = {
  progress: 0,
  onEditClick: () => {},
  onRemoveClick: () => {}
}

const css1 = {
  contentContainer: {
    display: 'flex', 
    justifyContent: 'center'
  },
  content: {
    maxWidth: '300px', 
    textOverflow: 'ellipsis', 
    whiteSpace: 'nowrap', 
    overflow: 'hidden'
  },
  metaContainer: {
    padding: '4px'  
  }
}

const CardAlias = props => {
  const {
    content,
    progress,
    css
  } = props
  const editMode = props.editMode !== undefined ? props.editMode : false
  const containerStyle = props.containerStyle || {}
  return (
    <div style={{ ...containerStyle}}>
      <controls.DashedProgress progress={progress} />

      <Segment attached className='cursor-pointer'>
        <div style={css.contentContainer}>
          <Header as='h3' style={css.content}>{content}</Header>
        </div>
      </Segment>

      <Segment attached style={css.metaContainer}>
        <layouting.FullNFillInRow> 
          <div> 
            <Label color='blue' size='tiny'>Elliot</Label>
            <Label color='blue' size='tiny'>linux</Label>
          </div>
          <Icon
            name={editMode ? 'trash' : 'edit'}
            color={editMode ? 'red' : 'blue'}
            className='cursor-pointer'
            onClick={() => {
              if (editMode) return props.onRemoveClick()
              return props.onEditClick()
            }}
          />
        </layouting.FullNFillInRow>
      </Segment>
    </div>
  )
}

CardAlias.propTypes = propTypes
CardAlias.defaultProps = defaultProps

export default withStyles(cardExplorer.cardAlias)(CardAlias)
