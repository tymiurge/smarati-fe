import React from 'react'
import { Grid } from 'semantic-ui-react'
import CardAlias from './CardAlias'
import { layouting } from 'components'

const styles = {
  relaxedCell: {
    padding: '0em 0.5em'
  },
  grid: {
    marginTop: '0.2em',
    marginBottom: '0.2em',
    marginLeft: '0.1em',
    marginRight: '0.1em',
  },
  relaxedRow: {
    padding: '0.2em 0.2em'
  }
}

const CardExplorer = props => {
  return (
    <layouting.PageLayout
      mainBody={<CardExplorer1 />}  
    />
  )
}

const CardExplorer1 = props => {
  return (
    <Grid style={styles.grid}>
      <Grid.Row style={styles.relaxedRow}>
        <Grid.Column width={4} style={styles.relaxedCell}>
        <CardAlias
    content='abbreviation' progress={0} editMode
       onEditClick={() => alert('edit')}
       onRemoveClick={() => alert('removing')}
    />

        </Grid.Column>
        
        <Grid.Column width={4} style={styles.relaxedCell}>
        <CardAlias
      content='go' progress={5}
      onEditClick={() => alert('edit')}
      onRemoveClick={() => alert('removing')}
    />  
        </Grid.Column>

        <Grid.Column width={4} style={styles.relaxedCell}>
        <CardAlias
      content='abbreviation' progress={0} editMode
      onEditClick={() => alert('edit')}
      onRemoveClick={() => alert('removing')}
    />
        </Grid.Column>

        <Grid.Column width={4} style={styles.relaxedCell}>
        <CardAlias content='$ docker run --name some-mongo -d mongo:tag' progress={4} />
        </Grid.Column>

        

      </Grid.Row>


      <Grid.Row style={styles.relaxedRow}>
        <Grid.Column width={4} style={styles.relaxedCell}>
        <CardAlias
    content='abbreviation' progress={0} editMode
       onEditClick={() => alert('edit')}
       onRemoveClick={() => alert('removing')}
    />

        </Grid.Column>
        
        <Grid.Column width={4} style={styles.relaxedCell}>
        <CardAlias
      content='go' progress={5}
      onEditClick={() => alert('edit')}
      onRemoveClick={() => alert('removing')}
    />  
        </Grid.Column>

        <Grid.Column width={4} style={styles.relaxedCell}>
        <CardAlias
      content='abbreviation' progress={0} editMode
      onEditClick={() => alert('edit')}
      onRemoveClick={() => alert('removing')}
    />
        </Grid.Column>

        <Grid.Column width={4} style={styles.relaxedCell}>
        <CardAlias content='$ docker run --name some-mongo -d mongo:tag' progress={4} />
        </Grid.Column>

        

      </Grid.Row>



    </Grid>
    
    // <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
    
    
    // <CardAlias content='docker restart mongoserver' progress={7}/>
    
    // <CardAlias content='$ docker run --name some-mongo -d mongo:tag' progress={4} />
    // </div>
  )
}




export default CardExplorer
