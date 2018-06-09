import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
// import Logo from '../../assets/qmlogo.png';
import Portrait from '../../assets/mesa.jpg';
import styles from './header.module.css';

const ListLink = props => (
  <div className={styles.item}>
    <Link to={props.to} className={styles.menu}>
      {props.children}
    </Link>
  </div>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const Menu = () => (
  <div className={styles.menubar}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/about">About</ListLink>
  </div>
);

export const Header = ({ title }) => (
  <div className={styles['header-container']}>
    <div className={styles['logo-container']}>
      <img src={Portrait} className={styles.image} alt="logo" />
      <Link to="/" className={styles.title}>
        <h3>{title}</h3>
      </Link>
    </div>
    <Menu />
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
