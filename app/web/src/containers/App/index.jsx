import React from 'react';
import AppBar from 'material-ui/AppBar';

import PageDrawer from '../PageDrawer';
import Footer from '../Footer';
import JobListPanel from '../JobListPanel';

import styles from './s.styl';

class App extends React.Component {

  render() {
    return (
      <div>

       <div className={styles.two_col}>
         <PageDrawer />
         <div style={{width:'12px'}} />
         <JobListPanel />
       </div>

        <div style={{height:'20px'}} />

       <Footer />
      </div>
    )
  }
}

export default App;
