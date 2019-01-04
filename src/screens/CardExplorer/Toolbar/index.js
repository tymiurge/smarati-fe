import React from 'react'
import SearchMode from './SearchMode'
import ButtonsMode from './ButtonsMode'
import EditMode from './EditMode'

class Toolbar extends React.Component {
  panels = {
    search: <SearchMode
      {...this.props}
      onClose={() => this.onModeSwitch('buttons')}
    />,
    buttons: <ButtonsMode 
      {...this.props}
      onSearchClick={() => this.onModeSwitch('search')}
      onEditModeRequest={() => {
        this.onModeSwitch('edit', () => this.props.onEditModeRequest())  
      }}
    />,
    edit: <EditMode {...this.props} />
  }
  onModeSwitch = (mode, callback = () => {}) => {
    if (this.panels[mode] === undefined) {
      throw new Error(`Toolbar does not have ${mode} mode`)
    }
    this.setState(
      {...this.state, mode},
      callback
    )
  }
  state = {
    mode: 'buttons'
  }
  render() {
    const ModeComponent = this.panels[this.state.mode]
    return ModeComponent
  }
}

export default Toolbar


