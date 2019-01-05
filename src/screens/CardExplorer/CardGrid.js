import React from 'react'
import { Grid } from 'semantic-ui-react'
import CardAlias from './CardAlias'
import { arrs } from 'utils'
import { styles, withStyles } from 'components'

const cards = [
  {
    id: 1, content: 'go', progress: 7
  },
  {
    id: 2, content: 'abbreviation', progress: 5
  }, 
  {
    id: 3, content: '$ docker run --name some-mongo -d mongo:tag', progress: 1
  },
  {
    id: 4, content: '$ rm -rf docs', progress: 3
  },
  {
    id: 5, content: '$ chmod 777 command.sh', progress: 0
  },
  {
    id: 6, content: 'deck', progress: 5
  },
  {
    id: 7, content: 'scatterbrained', progress: 2
  },
  {
    id: 8, content: 'foolish', progress: 0
  },
  {
    id: 9, content: 'vivre', progress: 6
  },
  {
    id: 10, content: 'tazo', progress: 7
  },
  {
    id: 11, content: 'dias', progress: 3
  },
  {
    id: 12, content: 'noches', progress: 3
  }
]

const CardGrid = props => {
  const GRID_ROW_SIZE = 4
  const { css, editMode } = props
  return (
    <Grid style={css.grid}>
      {
        arrs.chunk(cards, GRID_ROW_SIZE).map((rowArr, rowIdx) => (
          <Grid.Row key={`row_${rowIdx}`} style={css.relaxedRow}>
            {
              rowArr.map(card => (
                <Grid.Column key={card.id} width={4} style={css.relaxedCell}>
                  <CardAlias
                    {...card}
                    editMode={editMode}
                    onEditClick={() => alert('edit')}
                  />
                </Grid.Column>
              ))
            }
          </Grid.Row>
        ))
      }
    </Grid>
  )
}

export default withStyles(styles.cardExplorer.cardGrid)(CardGrid)
