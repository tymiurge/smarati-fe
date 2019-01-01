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
    <Segment attached style={{backgroundColor: 'blue'}} className='cursor-pointer'>
      <layouting.FillNFullInRow>
        <Icon name='inbox' style={{color: 'white', marginRight: '15px'}} size='large'/> 
        <Header as='h3' style={{color: 'white'}}>{content}</Header>
      </layouting.FillNFullInRow>
    </Segment>

    <Segment attached style={{padding: '4px'}}>
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
