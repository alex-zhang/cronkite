import React from 'react';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import styles from './s.styl';

class JobsList extends React.Component {

  render() {
    return (
      <div>
        <div style={{display:"flex", padding:"10px"}}>
          <p>Jobs</p>
          <RaisedButton label="Add New Job" />
        </div>
        <Divider />

        <Table style={{height:'800px'}}>
          <TableHeader>
            <TableRow>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Executions</TableRowColumn>
              <TableRowColumn>Host</TableRowColumn>
              <TableRowColumn>Actions</TableRowColumn>
            </TableRow>
          </TableHeader>

          <TableBody>

          </TableBody>
        </Table>

      </div>
    );
  }
}

export default JobsList;
