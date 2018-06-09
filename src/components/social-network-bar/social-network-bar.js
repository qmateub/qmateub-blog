import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './social-network-bar.module.css';

const urls = [
  'https://twitter.com/quiquemateub',
  'https://www.linkedin.com/in/quiquemateuborox',
  'https://github.com/qmateub',
  'https://medium.com/@quiquemateub',
];

export const SocialNetworkBar = () => (
  <div className={styles.bar}>
    <SocialIcon
      network="twitter"
      url={urls[0]}
      style={{ height: 40, width: 40, marginLeft: '25px' }}
    />
    <SocialIcon
      network="linkedin"
      url={urls[1]}
      style={{ height: 40, width: 40, marginLeft: '25px' }}
    />
    <SocialIcon
      network="github"
      url={urls[2]}
      style={{ height: 40, width: 40, marginLeft: '25px' }}
      color="black"
    />
    <SocialIcon
      network="medium"
      url={urls[3]}
      style={{ height: 40, width: 40, marginLeft: '25px' }}
    />
  </div>
);

export default SocialNetworkBar;
