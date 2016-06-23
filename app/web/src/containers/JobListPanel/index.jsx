import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

//import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import styles from './s.styl';

class JobListPanel extends React.Component {

  render() {
    return (
      <div className={styles.self}>

        <div style={{height:'20px'}} />

        <Table style={{height:'800px'}}>
          <TableHeader>
            <TableRow>
              <TableRowColumn>Id</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Icon</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
          </TableHeader>

          <TableBody>

          </TableBody>

          <TableFooter>
            <TableRow>
              <TableRowColumn>Id</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Icon</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    )
  }
}

export default JobListPanel;
