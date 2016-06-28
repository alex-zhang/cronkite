import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';

import Header from '../Header';
import Footer from '../Footer';
import JobListPanel from '../JobListPanel';

import styles from './s.styl';

import JobList from '../JobList'

class App extends React.Component {

  render() {
    console.log(this.props.children + '---------');
    return (
      <div>
        <Header />
        <div className={styles.content}>
          <Paper style={{padding:"10px"}}>
            <JobList />
          </Paper>
        </div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
