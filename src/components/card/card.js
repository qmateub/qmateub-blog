import React from 'react';
import { Link } from 'gatsby';
import styles from './card.module.css';

export const Card = ({ node }) => (
  <div className={styles.container}>
    <Link to={node.slug} className={styles.link}>
      <div className={styles.title}>{node.title.title}</div>
      <div className={styles.date}>{node.createdAt}</div>
    </Link>
  </div>
);

export default Card;
