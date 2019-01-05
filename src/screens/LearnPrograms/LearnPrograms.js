import React from 'react'
import { layouting, domain } from 'components'

const LearnPrograms = props => {
  const SCREEN_NAME = 'Learning Programs'
  return (
    <layouting.PageLayout
      gutterBody={(<domain.LeftNavigation activeName={SCREEN_NAME}/>)}
      mainBody={<div>mainBody</div>}
      gutterLogo={(<domain.HomeNavigation />)}
      asideHeader={(<domain.TitleSection title={SCREEN_NAME} />)}
      asideBody={<div>aside body</div>}
      mainHeader={<div>toolbar</div>}
    />  
  )
}

export default LearnPrograms
