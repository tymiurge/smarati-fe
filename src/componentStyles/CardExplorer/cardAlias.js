import * as vars from './../variables'

const cardAlias = {
  contentContainer: {
    display: 'flex', 
    justifyContent: 'center'
  },
  content: {
    maxWidth: '300px', 
    textOverflow: 'ellipsis', 
    whiteSpace: 'nowrap', 
    overflow: 'hidden'
  },
  metaContainer: {
    padding: '4px'  
  },
  dimmerContainer: {
    ...vars.noPadding
  }
}

export default cardAlias