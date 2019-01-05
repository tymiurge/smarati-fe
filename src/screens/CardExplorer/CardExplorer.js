import React from 'react'
import CardGrid from './CardGrid'
import DeckNavigator from './DeckNavigator'
import Toolbar from './Toolbar'
import { layouting, domain } from 'components'

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
