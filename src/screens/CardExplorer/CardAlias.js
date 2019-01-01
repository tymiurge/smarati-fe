import React from 'react'
import { Segment, Header, Label, Icon } from 'semantic-ui-react'
import { layouting, controls } from 'components'
import PropTypes from 'prop-types'

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

const CardAlias = props => {
  const {
    content,
    progress,
  } = props
  const editMode = props.editMode !== undefined ? props.editMode : false
  return (
    <div style={{width: '300px'}}>
      <controls.DashedProgress progress={progress} />

      <Segment attached className='cursor-pointer'>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Header as='h3' style={{maxWidth: '300px', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{content}</Header>
        </div>
      </Segment>

      <Segment attached style={{padding: '4px'}}>
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

export default CardAlias
