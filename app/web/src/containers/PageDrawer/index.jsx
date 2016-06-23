import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import FontIcon from 'material-ui/FontIcon';
import ContentAdd from 'material-ui/svg-icons/content/add';

import SubNumber from '../../components/SumNumber';

import styles from './s.styl';

class PageDrawer extends React.Component {

  render() {
    return (
      <div className={styles.self}>

        <p id="title"
           className={styles.title}
           style={{'align-self':'flex-start'}}>
          Cronkit
        </p>

        <div style={{height:'20px'}} />

        <div style={{'align-self':'flex-end', 'padding-right':'20px'}}>
          <SubNumber />
        </div>

        <Divider style={{width:'100%', margin:"12px 0"}}/>

        <div style={{'align-self':'flex-end', 'padding-right':'20px'}}>
          <SubNumber />
        </div>

        <div style={{height:'20px'}} />

        <RaisedButton
          label="Create New Job"
          secondary={true}
          icon={<FontIcon className="muidocs-icon-action-home" />}
        />

       </div>
    )
  }
}

export default PageDrawer;
