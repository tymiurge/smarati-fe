import React from 'react'

const DashedProgress = ({progress}) => (
  <div style={{height: '5px', display: 'flex', justifyContent: 'center'}}>
    {
      (new Array(7)).fill(0).map((_, key) => (
        <div key={key} style={{height: '100%', flex: 1, paddingLeft: key !== 0 ? '1px' : '0px'}}>
          <div style={{height: '100%', width: '100%', backgroundColor: key < progress ? 'green' : 'gray'}}></div>
        </div>    
      ))
    }
    
  </div>
)

export default DashedProgress