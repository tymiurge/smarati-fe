import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import css from './../styles/domain/leftNavigation'

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
