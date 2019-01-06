import React from 'react'
import { layouting, domain } from 'components'
import ProgramsTable from './ProgramsTable'

const LearnPrograms = props => {
  const SCREEN_NAME = 'Learning Programs'
  return (
    <layouting.PageLayout
      gutterBody={(<domain.LeftNavigation activeName={SCREEN_NAME}/>)}
      mainBody={<ProgramsTable />}
      gutterLogo={(<domain.HomeNavigation />)}
      asideHeader={(<domain.TitleSection title={SCREEN_NAME} />)}
      asideBody={<div>aside body</div>}
      mainHeader={<div>toolbar</div>}
    />  
  )
}

export default LearnPrograms
