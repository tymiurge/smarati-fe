import React from 'react'
import { Grid } from 'semantic-ui-react'
import CardAlias from './CardAlias'
import CardBoxAlias from './CardBoxAlias'
import { layouting } from 'components'

const CardExplorer = props => {
  return (
    <layouting.PageLayout />
  )
}

const CardExplorer1 = props => {
  return (
    <div style={{display: 'flex', padding: '10px'}}>
    <CardAlias
      content='abbreviation' progress={0} editMode
      onEditClick={() => alert('edit')}
      onRemoveClick={() => alert('removing')}
    />
    <CardAlias
      content='go' progress={5}
      onEditClick={() => alert('edit')}
      onRemoveClick={() => alert('removing')}
    />
    <CardAlias content='docker restart mongoserver' progress={7}/>
    <CardAlias content='$ docker run --name some-mongo -d mongo:tag' progress={4} />
  </div>
  )
}




export default CardExplorer
