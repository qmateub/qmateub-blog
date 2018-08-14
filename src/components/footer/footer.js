import React from 'react';
import SocialNetworkBar from '../social-network-bar';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <SocialNetworkBar />
  </footer>
);

export default Footer;
