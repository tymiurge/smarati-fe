import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const programs = [
  {id: 1, name: 'All cards', progress: 50, quantity: 1235, baked: 12},
  {id: 2, name: 'English', progress: 25, quantity: 243, baked: 34},
  {id: 3, name: 'Spanish', progress: 33, quantity: 456, baked: 45}
]

const css = {
  relaxedHeader: {
    padding: '.62857143em .78571429em'
  }
}

const ProgramsTable = props => (
  <Table celled compact>
    <Table.Header >
      <Table.Row>
      <Table.HeaderCell style={css.relaxedHeader}>
        Program Name
      </Table.HeaderCell>
      <Table.HeaderCell style={css.relaxedHeader} collapsing>
        <Icon name='bell' />
      </Table.HeaderCell>
      <Table.HeaderCell style={css.relaxedHeader} collapsing>
        N
      </Table.HeaderCell>
      <Table.HeaderCell style={css.relaxedHeader} collapsing>
        <Icon name='percent' />
      </Table.HeaderCell>
      <Table.HeaderCell style={css.relaxedHeader}></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {
        programs.map(item => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.baked}</Table.Cell>
            <Table.Cell>{item.quantity}</Table.Cell>
            <Table.Cell>{item.progress}</Table.Cell>
            <Table.Cell collapsing><Icon name='sign-in' color='blue' className='cursor-pointer' /></Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
)

export default ProgramsTable
