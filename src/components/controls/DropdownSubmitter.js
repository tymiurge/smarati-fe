import React from 'react'
import { Dropdown, Button, Icon} from 'semantic-ui-react'

class DropdownSubmitter extends React.Component {

  render() {
    return (
      <>
      <Dropdown 
          placeholder='Move to Folder...'
          search
          selection
          options={[
            {key: 1, text: 'aaa', value: 1},
            {key: 2, text: 'aaa', value: 2},
            {key: 3, text: 'aaa', value: 3},
            {key: 4, text: 'aaa', value: 4},
          ]} 
          style={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            border: '1px solid rgba(34,36,38,.15)',
            
          }}
        />
        <Button 
          icon={
            <Icon.Group>
              <Icon name='folder' />
              <Icon corner name='chevron right' />
            </Icon.Group>
          }
          style={{
            borderTopLeftRadius: 0, borderBottomLeftRadius: 0,
            border: '1px solid rgba(34,36,38,.15)',
            borderLeft: '0px'
          }}
        />
        </>
    )
  }
}

export default DropdownSubmitter
