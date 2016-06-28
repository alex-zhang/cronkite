import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import styles from './s.styl';

class Header extends React.Component {

  render() {
    return (
      <Tabs>
        <Tab label="Cronkite" >
        </Tab>
        <Tab label="Jobs" >
        </Tab>
        <Tab label="Executions" >
        </Tab>
        <Tab label="Hosts" >
        </Tab>
        <Tab label="Alerts" >
        </Tab>
      </Tabs>
    );
  }
}

export default Header;
