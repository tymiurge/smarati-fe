import React from 'react'
import { Grid } from 'semantic-ui-react'
import CardAlias from './CardAlias'
import CardGrid from './CardGrid'
import DeckNavigator from './DeckNavigator'
import Toolbar from './Toolbar'
import { layouting, domain } from 'components'

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
  },
  toolbarContainer: {
    width: '100%',
    height: '100%',
    padding: '.38em'
  }
}

const CardExplorer = props => {
  return (
    <layouting.PageLayout
      gutterBody={(<domain.LeftNavigation />)}
      mainBody={(<CardGrid />)}
      gutterLogo={(<domain.HomeNavigation />)}
      asideHeader={(<domain.TitleSection />)}
      asideBody={(<DeckNavigator />)}
      mainHeader={(
        <Toolbar
          onCardAddRequest={() => alert('ok, i will add card')}
          onEditModeRequest={() => alert('ok, i will switch to edit mode')}
        />
      )}
    />
  )
}

export default CardExplorer
