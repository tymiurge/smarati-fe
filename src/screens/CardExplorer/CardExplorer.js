import React from 'react'
import CardGrid from './CardGrid'
import DeckNavigator from './DeckNavigator'
import Toolbar from './Toolbar'
import { layouting, domain } from 'components'

class CardExplorer extends React.Component {
  state={
    inEdit: false
  }
  switchMode = mode => {
    const inEdit = mode === 'edit' 
    this.setState({...this.state, inEdit})
  }
  render() {
    const { state } = this
    return (
      <layouting.PageLayout
        gutterBody={(<domain.LeftNavigation />)}
        mainBody={(<CardGrid editMode={state.inEdit}/>)}
        gutterLogo={(<domain.HomeNavigation />)}
        asideHeader={(<domain.TitleSection title='Card Explorer' />)}
        asideBody={(<DeckNavigator />)}
        mainHeader={(
          <Toolbar
            onCardAddRequest={() => alert('ok, i will add card')}
            onModeChange={this.switchMode}
          />
        )}
      />  
    )
  }
}

export default CardExplorer
