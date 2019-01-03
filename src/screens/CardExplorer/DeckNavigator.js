import React from 'react'
import { List } from 'semantic-ui-react'
import { cardExplorer, withStyles } from 'component-styles'

const css1 = {
  container: {
    width: '100%',
    height: '100%',
    padding: '.38em'
  },
  selected: {
    backgroundColor: '#2185d0'
  }
}

const decks = [
  {id: 1, title: 'All Cards'},
  {id: 2, title: 'English 100 words'},
  {id: 3, title: 'English 1000 words'},
  {id: 4, title: 'Waiting for Godot'},
  {id: 5, title: 'Linux Commands'},
  {id: 6, title: 'Docker Commands'},
  {id: 7, title: 'The door into the summer'},
  {id: 8, title: 'Spanish 100 words'},
  {id: 9, title: 'English proverbs'},
  {id: 10, title: 'Spanish 1000 words'},
  {id: 11, title: 'Spanish proverbs'},
  {id: 12, title: 'Kubernates commands'},
  {id: 13, title: 'Kubernates commands'},
  {id: 14, title: 'Kubernates commands'},
  {id: 15, title: 'Kubernates commands'},
  {id: 16, title: 'Kubernates commands'},
  {id: 17, title: 'Spanish proverbs'},
  {id: 18, title: 'Kubernates commands'},
  {id: 19, title: 'Kubernates commands'},
  {id: 20, title: 'Kubernates commands'},
  {id: 21, title: 'Spanish proverbs'},
  {id: 22, title: 'Kubernates commands'},
  {id: 23, title: 'Kubernates commands'},
  {id: 24, title: 'Kubernates commands'},
  {id: 25, title: 'Kubernates commands'},
  {id: 26, title: 'Kubernates commands'},
  {id: 27, title: 'Spanish proverbs'},
  {id: 28, title: 'Kubernates commands'},
  {id: 29, title: 'Kubernates commands'},
  {id: 30, title: 'Kubernates commands'},
]

class DeckNavigator extends React.Component {

  state = {
    selected: 0
  }

  onItemSelect = id => {
    this.setState(
      {...this.state, selected: id}
    )
  }
  

  render() {
    const { state, props } = this
    const { css } = props
    return (
      <div style={css.container}>
        <List selection verticalAlign='middle'>
        {
          decks.map(deck => (
            <List.Item
              key={deck.id}
              style={deck.id === state.selected ? css.selected : {}}
              onClick={() => this.onItemSelect(deck.id)}
            >
              <List.Content>
                <List.Header>{deck.title}</List.Header>
              </List.Content>
            </List.Item>    
          ))
        }
        </List>
      </div>
    )
  }
}

export default withStyles(cardExplorer.deckNavigator)(DeckNavigator)
