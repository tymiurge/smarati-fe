import React from 'react'
import { Grid } from 'semantic-ui-react'
import CardAlias from './CardAlias'


const CardExplorer = props => (
  <Grid columns={4}>
    <Grid.Row>
      <Grid.Column>
        <div style={{padding: '10px'}}>
        <CardAlias content='abbreviation'/>
        </div>
      </Grid.Column>

      <Grid.Column>
      <div style={{padding: '10px'}}>
        <CardAlias content='go'/>
        </div>
      </Grid.Column>

      <Grid.Column>
        <div style={{padding: '10px'}}>
        <CardAlias content='docker restart mongoserver'/>
        </div>
      </Grid.Column>

      <Grid.Column>
        <div style={{padding: '10px'}}>
          <CardAlias content='$ docker run --name some-mongo -d mongo:tag'/>
        </div>
      </Grid.Column>
    </Grid.Row>


    <Grid.Row>
      <Grid.Column>
        <div style={{padding: '10px'}}>
        <CardAlias content='ok'/>
        </div>
      </Grid.Column>

      <Grid.Column>
      <div style={{padding: '10px'}}>
        <CardAlias content='virtualization'/>
        </div>
      </Grid.Column>

      <Grid.Column>3
      </Grid.Column>

      <Grid.Column>4
      </Grid.Column>
    </Grid.Row>

    
  </Grid>
)

export default CardExplorer
