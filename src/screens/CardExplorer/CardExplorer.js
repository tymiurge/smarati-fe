import React from 'react'
import { Grid } from 'semantic-ui-react'
import CardAlias from './CardAlias'
import CardBoxAlias from './CardBoxAlias'
import { layouting } from 'components'

const CardExplorer = props => {
  return (
    <layouting.PageLayout
      
    />
  )
}


const CardExplorer1 = props => (
  <div style={{display: 'flex'}}>
    <CardAlias content='abbreviation'/>
    <CardAlias content='go'/>
    <CardAlias content='docker restart mongoserver'/>
    <CardAlias content='$ docker run --name some-mongo -d mongo:tag'/>
  </div>

)

export default CardExplorer
