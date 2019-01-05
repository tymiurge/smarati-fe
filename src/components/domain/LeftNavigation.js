import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const css = {
  container: {
    width: '100%',
    height: '100%',
    padding: '.38em'
  },
  notFirstItem: {
    marginTop: '.38em'
  }
}

const navItems = [
  {name: 'Card Explorer', icon: 'sticky note'},
  {name: 'Learning Programs', icon: 'tasks'},
  {name: 'Community Decks', icon: 'find'},
  {name: 'Statistics', icon: 'area chart'}
]

const LeftNavigation = props => {
  const { activeName } = props
  console.log(activeName)
  return (
    <div style={css.container}>
      {
        navItems.map((item, idx) => {
          //const color = item.name === activeName ? 'blue' : 'grey'
          let buttonProps = {
            icon: item.icon,
            style: idx !== 0 ? css.notFirstItem : {}
          }
          if (item.name === activeName) {
            buttonProps = {...buttonProps, color: 'blue'}
          }
          return (
            <Popup
              key={`nav_item_${item.name}`}
              trigger={(<Button {...buttonProps} />)}
              content={item.name}
              position='right center'
              inverted
            />    
          )
        })
      }
    </div>
  )
}

export default LeftNavigation
