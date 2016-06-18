import React from 'react';
import AppBar from 'material-ui/AppBar';
import Footer from '../components/footer';

class App extends React.Component {

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <Footer />
      </div>
    )
  }
}

export default App;
