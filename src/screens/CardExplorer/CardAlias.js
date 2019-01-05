import React from 'react'
import { Segment, Header, Label, Icon, Dimmer } from 'semantic-ui-react'
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
  <Segment attached style={props.css.metaContainer} className='cursor-pointer'>
    {
      props.checked
        ? <Icon name='check square outline' />
        : <Icon name='square outline' />
    }
  </Segment>
)

const DimmerContainer = props => (
  <Segment style={{padding: 0}}>
    { props.children }
  </Segment>
)
 
const propTypes = {
  content: PropTypes.string,
  progress: PropTypes.number,
  editMode: PropTypes.bool,
  onEditClick: PropTypes.func,
}

const defaultProps = {
  progress: 0,
  onEditClick: () => {},
}

class CardAlias extends React.Component {
  state = {
    selected: false
  }
  toggleSelected = () => {
    this.setState(state => ({...state, selected: !state.selected}))
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
      <div
        style={{ ...containerStyle}}
        onClick={() => props.editMode && !state.selected && this.toggleSelected() }
      >
        <Dimmer.Dimmable as={DimmerContainer} dimmed={state.selected}>
        <controls.DashedProgress progress={progress} />
        <Segment attached className='cursor-pointer'>
          <div style={css.contentContainer}>
            <Header as='h3' style={css.content}>{content}</Header>
          </div>
        </Segment>
        {
          editMode 
            ? <EditModeTools {...props} checked={state.selected} />
            : <StaticInfo {...props} />
        }
          <Dimmer
            active={state.selected}
            onClickOutside={this.toggleSelected}
            className='cursor-pointer'
          >
            <div onClick={this.toggleSelected}>
              <div><Icon name='check' size='big'/></div>
              Click To Uncheck
            </div>
          </Dimmer>
        </Dimmer.Dimmable>
      </div>  
    )
  }
}

CardAlias.propTypes = propTypes
CardAlias.defaultProps = defaultProps

export default withStyles(cardExplorer.cardAlias)(CardAlias)
