import React from 'react'
import { Grid, Header, Button, Table } from 'semantic-ui-react'
import { layouting } from 'components'
import CardAlias from './../../screens/CardExplorer/CardAlias'

const PageLayout = props => {
  const fullHeight = window.innerHeight
  return (
    <layouting.FillNFullInRow>
      <div style={{width: '50px', height: `${fullHeight}px`}}>
        <div style={{width: '50px', height: `${47}px`, padding: '.38em'}}>
          <Button icon='home' />
        </div>
        <div style={{width: '50px', padding: '.38em'}}>
          <Button icon='sticky note' />
          <Button icon='tasks' style={{marginTop: '.38em'}}/>
          <Button icon='find' style={{marginTop: '.38em'}}/>
          <Button icon='area chart' style={{marginTop: '.38em'}}/>
          
        </div>
      </div>
      <Grid celled style={{margin: 0}}>
      
      <Grid.Row style={{height: '47px'}}>
        <Grid.Column width={3}>
        <Header as='h3' color='blue'>Cards Explored</Header>
        </Grid.Column>
        <Grid.Column width={13} style={{padding: '.38em'}}>
          <Button icon='plus' />
          <Button icon='search' />
          
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{height: `${fullHeight - 94}px`}}>
        <Grid.Column width={3}>
        aside body
        </Grid.Column>
        <Grid.Column width={13}>
          
                
                
                
                
          
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{height: '47px'}}>
        <Grid.Column width={3}>
        aside footer
        </Grid.Column>
        <Grid.Column width={13}>
        main footer
        </Grid.Column>
      </Grid.Row>

    </Grid>
    </layouting.FillNFullInRow>
  
  )
}

export default PageLayout
