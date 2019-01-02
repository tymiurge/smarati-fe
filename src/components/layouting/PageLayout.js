import React from 'react'
import PropTypes from 'prop-types'

const vars = {
  headerHeight: 47,
  borderColor: '#d4d4d5'
}

const styles = {
  container: {
    display: 'flex',
  },
  gutter: {
    width: '50px',
    flex: '0 0 50px',
  },
  gutterContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  gutterLogo: {
    height: `${vars.headerHeight}px`,
    boxShadow: `0 1px 0 0 ${vars.borderColor}`,
  },
  gutterBody: {
    
  },
  aside: {
    width: '300px',
    flex: '0 0 300px',
    boxShadow: `-1px 0 0 0 ${vars.borderColor}`,
    zIndex: '1'
  },
  asideContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  auxiliaryHeader: {
    height: `${vars.headerHeight}px`,
    boxShadow: `0 1px 0 0 ${vars.borderColor}`,
    border: 'none',
    zIndex: '3'
  },
  auxiliaryFooter: {
    height: `${vars.headerHeight}px`,
    boxShadow: `0 -1px 0 0 ${vars.borderColor}`,
    border: 'none',
    zIndex: '3'
  },
  asideBody: {
  },
  main: {
    width: '100%',
    boxShadow: `-1px 0 0 0 ${vars.borderColor}`,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  mainBody: {
  }

}

const propTypes = {
  mainBody: PropTypes.object,
  gutterBody: PropTypes.object,
  gutterLogo: PropTypes.object
}

const defaultProps = {
  mainBody: (<></>),
  gutterBody: (<></>),
  gutterLogo: (<></>)
}

const PageLayout = props => {
  const fullHeight = window.innerHeight
  return (
    <div style={styles.container}>
      <div style={{...styles.gutter}}>
        <div style={styles.gutterContainer}>
          <div style={styles.gutterLogo}>
            { props.gutterLogo }
          </div>
          <div style={{...styles.gutterBody, height: `${fullHeight - vars.headerHeight}px`}}>
            { props.gutterBody }
          </div>
        </div>
      </div>
      <div style={{...styles.aside}}>
        <div style={styles.asideContainer}>
          <div style={styles.auxiliaryHeader}>AAA</div>
          <div style={{...styles.asideBody, height: `${fullHeight - 2 * vars.headerHeight}px`}}>
            aside body
          </div>
          <div style={styles.auxiliaryFooter}>aside footer</div>
        </div>
      </div>
      <div style={styles.main}>
        <div style={styles.mainContainer}>
          <div style={{...styles.auxiliaryHeader}}>main header</div>
          <div style={{...styles.mainBody, height: `${fullHeight - 2 * vars.headerHeight}px`}}>
            { props.mainBody }
          </div>
          <div style={{...styles.auxiliaryFooter}}>aside footer</div>
        </div>
      </div>
    </div>
  )
}

PageLayout.propTypes = propTypes
PageLayout.defaultProps = defaultProps

export default PageLayout
