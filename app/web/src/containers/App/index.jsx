import React from 'react';
import AppBar from 'material-ui/AppBar';

import Header from '../Header';
import Footer from '../Footer';
import JobListPanel from '../JobListPanel';

import styles from './s.styl';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
