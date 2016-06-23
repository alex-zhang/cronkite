import React from 'react';

import styles from './s.styl';

class SubNumber extends React.Component {

  render() {
    return (
      <div>
        <p className={styles.num_val}>256</p>
        <p className={styles.num_label}>hello</p>
      </div>
    )
  }

}

export default SubNumber;
