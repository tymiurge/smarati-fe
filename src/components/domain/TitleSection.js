import React from 'react'
import { Header } from 'semantic-ui-react'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    padding: '1em'
  }
}

const TitleSection = props => (
  <div style={styles.container}>
    <Header as='h3' color='blue'>Cards Explored</Header>
  </div>
)

export default TitleSection
