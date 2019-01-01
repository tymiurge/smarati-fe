import React from 'react'
import { Segment, Header, Label, Icon } from 'semantic-ui-react'
import { layouting, controls } from 'components'

const CardAlias = props => {
  const {
    content,
    progress
  } = props
  return (
    <div style={{width: '300px'}}>
    {/* <div style={{height: '3px', width: '100%', backgroundColor: 'green'}}></div> */}
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
      {/* <Icon name='edit' color='blue' className='cursor-pointer' /> */}
      </div>
<Icon name='edit' color='blue' className='cursor-pointer' />
    </layouting.FullNFillInRow>
    </Segment>
    </div>
  )
}

export default CardAlias
