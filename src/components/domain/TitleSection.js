import React from 'react'
import { Header } from 'semantic-ui-react'

const css = {
  container: {
    width: '100%',
    height: '100%',
    padding: '1em'
  }
}

const TitleSection = ({title}) => (
  <div style={css.container}>
    <Header as='h3' color='blue'>{title}</Header>
  </div>
)

export default TitleSection
