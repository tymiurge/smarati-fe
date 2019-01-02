import React from 'react'

const vars = {
  headerHeight: 47
}

const styles = {
  container: {
    display: 'flex',
    //justifyContent: 'space-around',
    //alignItems: 'stretch',
    //width: '100%'
  },

  gutter: {
    width: '50px',
    flex: '0 0 50px',
    backgroundColor: 'green'
  },
  gutterContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  gutterLogo: {
    height: `${vars.headerHeight}px`
  },
  gutterBody: {
    backgroundColor: 'purple'
  },
  aside: {
    width: '300px',
    flex: '0 0 300px',
  },
  auxiliarySection: {
    height: `${vars.headerHeight}px`,
  },
  asideContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  asideHeader: {
    height: `${vars.headerHeight}px`,
    backgroundColor: 'yellow'
  },
  asideBody: {
    backgroundColor: 'brown'
  },

  main: {
    width: '100%'
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  mainBody: {
    backgroundColor: 'blue'
  }
  
}

const PageLayout = props => {
  const fullHeight = window.innerHeight
  return (
    <div style={styles.container}>
      <div style={{...styles.gutter}}>
        <div style={styles.gutterContainer}>
          <div style={styles.gutterLogo}>logo</div>
          <div style={{...styles.gutterBody, height: `${fullHeight - vars.headerHeight}px`}}>nav</div>
        </div>
      </div>
      <div style={{...styles.aside}}>
        <div style={styles.asideContainer}>
          <div style={styles.auxiliarySection}>AAA</div>
          <div style={{...styles.asideBody, height: `${fullHeight - 2 * vars.headerHeight}px`}}>AAA</div>
          <div style={styles.auxiliarySection}>aside footer</div>
        </div>
      </div>
      <div style={styles.main}>
        <div style={styles.mainContainer}>
          <div style={{...styles.auxiliarySection, backgroundColor: 'yellow'}}>AAA</div>
          <div style={{...styles.mainBody, height: `${fullHeight - 2 * vars.headerHeight}px`}}>AAA</div>
          <div style={{...styles.auxiliarySection, backgroundColor: 'yellow'}}>aside footer</div>
        </div>
      </div>
    </div>
  )
}

export default PageLayout
