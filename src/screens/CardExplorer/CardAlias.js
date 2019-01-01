import React from 'react'
import { Segment, Header, Label } from 'semantic-ui-react'

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
      
    <Label color='blue' size='tiny'>Elliot</Label>
    <Label color='blue' size='tiny'>linux</Label>
    </Segment>
    </>
  )
}

export default CardAlias
