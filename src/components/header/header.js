import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import classnames from 'classnames';
import Portrait from '../../assets/mesa.jpg';
import styles from './header.module.css';

const ListLink = props => (
  <div className={styles.item}>
    <AniLink
      fade
      to={props.to}
      className={classnames(styles.menu, {
        [styles.menuItemActive]: props.isActive,
      })}
    >
      {props.children}
    </AniLink>
  </div>
);

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export const Menu = ({ activeRoute }) => (
  <div className={styles.menubar}>
    <ListLink to="/" isActive={activeRoute === '/'}>
      Home
    </ListLink>
    <ListLink to="/posts" isActive={activeRoute.includes('posts')}>
      Posts
    </ListLink>
    <ListLink to="/about" isActive={activeRoute.includes('about')}>
      About
    </ListLink>
  </div>
);

export const Header = ({ title, location }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={Portrait} className={styles.image} alt="logo" />
        <AniLink fade to="/" className={styles.title}>
          <h3>{title}</h3>
        </AniLink>
      </div>
      <Menu activeRoute={location.pathname} />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
