import React from 'react'
import { Dropdown, Button, Icon} from 'semantic-ui-react'
import dropdownSubmitter from './../styles/controls/dropdownSubmitter'
import withStyles from './../withStylesHoc'
import PropTypes from 'prop-types'

class DropdownSubmitter extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array
  }
  static defaultProps = {
    placeholder: 'Move to Folder...',
    options: []
  }
  render() {
    const { css, placeholder, options } = this.props
    return (
      <>
      <Dropdown 
        placeholder={placeholder}
        search
        selection
        options={options} 
        style={css.dropdown}
      />
      <Button 
        icon={
          <Icon.Group>
            <Icon name='folder' />
            <Icon corner name='chevron right' />
          </Icon.Group>
        }
        style={css.button}
      />
      </>
    )
  }
}

export default withStyles(dropdownSubmitter)(DropdownSubmitter)
