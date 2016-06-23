import React from 'react';

import styles from './s.styl';

class Footer extends React.Component {

  render() {
    return (
      <div className={styles.self}>
       <p>Hand crafted with love by the engineers at Call-Em-All and our awesome contributors.</p>
      </div>
    );
  }
}

export default Footer;
