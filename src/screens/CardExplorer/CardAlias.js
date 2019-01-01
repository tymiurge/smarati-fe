import React from 'react'
import { Segment, Header, Label, Icon } from 'semantic-ui-react'
import { layouting } from 'components'

const CardAlias = props => {
  const {
    content
  } = props
  return (
    <>
    <div style={{height: '3px', width: '100%', backgroundColor: 'green'}}></div>
    <Segment attached>
      
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <Header as='h3'>{content}</Header>
      </div>
    </Segment>

    <Segment attached style={{padding: '6px'}}>
    <layouting.FullNFillInRow> 
      <div> 
        <Label color='blue' size='tiny'>Elliot</Label>
        <Label color='blue' size='tiny'>linux</Label>
      {/* <Icon name='edit' color='blue' className='cursor-pointer' /> */}
      </div>
<Icon name='edit' color='blue' className='cursor-pointer' />
    </layouting.FullNFillInRow>
    </Segment>
    </>
  )
}

export default CardAlias
