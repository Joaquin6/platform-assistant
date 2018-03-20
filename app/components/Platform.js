// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Platform.css';

type Props = {
  platform: string,
  getPlatform: () => void
};

export default class Counter extends Component<Props> {
  props: Props;

  render() {
    const { platform, getPlatform } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`platform ${styles.platform}`} data-tid="platform">
          {platform}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={getPlatform} data-tclass="btn">
            <i className="fa fa-desktop" />
          </button>
        </div>
      </div>
    );
  }
}
