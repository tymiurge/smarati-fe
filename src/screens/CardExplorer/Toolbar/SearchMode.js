import React from 'react'
import { cardExplorer, withStyles } from 'component-styles'
import { Button, Input } from 'semantic-ui-react'
import { layouting } from 'components'
import PropTypes from 'prop-types'

class SearchMode extends React.Component {
  static propTypes = {
    css: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
  }
  static defaultProps = {
    onSubmit: () => {},
    onCancel: () => {}
  }
  state = {
    value: ''
  }
  onSearchChange = e => {
    const { value } = e.target
    const { state } = this
    this.setState({...state, value})
  }
  onSubmit = () => {
    this.props.onSubmit(this.state.value)
  }
  render() {
    const { css, onCancel } = this.props
    const { state } = this
    return (
      <div style={css.container}>
        <layouting.FullNFillInRow>
          <Input
            fluid icon='search' iconPosition='left' placeholder='Search cards...'
            value={state.value}
            onChange={this.onSearchChange}
          />
          <div>
            <Button icon='check' style={css.firstButton} onSubmit={this.onSubmit}/>
            <Button icon='cancel' onClick={onCancel}/>
          </div>
        </layouting.FullNFillInRow>
      </div>  
    )
  }
}

export default withStyles(cardExplorer.toolbar)(SearchMode)

