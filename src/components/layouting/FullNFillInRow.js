import React from 'react'
//import { propTypesBooster } from 'utils'

//const propTypes = propTypesBooster({}).withExactChildrenNumber(2)

const FullNFillInRow = props => (
  <div
    style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}
  >
    <div style={{flex: '1 1 auto'}}>
      { props.children[0] }
    </div>
    <div>
      { props.children[1] }
    </div>
  </div>
)

//FullNFillInRow.propTypes = propTypes

export default FullNFillInRow
