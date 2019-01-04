import React from 'react'
import { Segment, Header, Label, Icon, Checkbox, Dimmer } from 'semantic-ui-react'
import { layouting, controls } from 'components'
import PropTypes from 'prop-types'
import { cardExplorer, withStyles } from 'component-styles'

const StaticInfo = props => (
  <Segment attached style={props.css.metaContainer}>
    <layouting.FullNFillInRow> 
      <div> 
        <Label color='blue' size='tiny'>Elliot</Label>
        <Label color='blue' size='tiny'>linux</Label>
      </div>
      <Icon
        name={'edit'}
        color='blue'
        className='cursor-pointer'
        onClick={props.onEditClick}
      />
    </layouting.FullNFillInRow>
  </Segment>
)

const EditModeTools = props => (
  <Segment attached style={props.css.metaContainer}>
    <Checkbox
      label='Select'
      onChange={props.onSelectChange}
      checked={props.checked}
    />
  </Segment>
)

const DimmerContainer = props => (
  <Segment style={{padding: 0}}>
    { props.children }
  </Segment>
)
 
const propTypes = {
  content: PropTypes.string.isRequired,
  progress: PropTypes.number,
  editMode: PropTypes.bool,
  onEditClick: PropTypes.func.isRequired,
}

const defaultProps = {
  progress: 0,
  onEditClick: () => {},
}

class CardAlias extends React.Component {
  state = {
    selected: false
  }
  render() {
    const { props, state } = this
    const {
      content,
      progress,
      css
    } = props
    const editMode = props.editMode !== undefined ? props.editMode : false
    const containerStyle = props.containerStyle || {}
    return (
      <div style={{ ...containerStyle}}>
        <Dimmer.Dimmable as={DimmerContainer} dimmed={true}>
        <controls.DashedProgress progress={progress} />
        <Segment attached className='cursor-pointer'>
          <div style={css.contentContainer}>
            <Header as='h3' style={css.content}>{content}</Header>
          </div>
        </Segment>
        {
          editMode 
            ? <EditModeTools {...props} onSelectChange={() => alert('changing')} checked={state.selected} />
            : <StaticInfo {...props} />
        }
          <Dimmer
            active={true}
            onClickOutside={() => alert('ok')}
            className='cursor-pointer'
          >
            <Header as='h5' icon inverted>
              <Icon name='check' />
              Click To Uncheck
            </Header>
          </Dimmer>
        </Dimmer.Dimmable>
      </div>  
    )
  }
}

CardAlias.propTypes = propTypes
CardAlias.defaultProps = defaultProps

export default withStyles(cardExplorer.cardAlias)(CardAlias)
