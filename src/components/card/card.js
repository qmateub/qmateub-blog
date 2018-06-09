import React from 'react';
import Link from 'gatsby-link';
import styles from './card.module.css';

export const Card = ({ node }) => (
  <div className={styles.container}>
    <Link to={node.fields.slug} className={styles.link}>
      <div className={styles.title}>{node.frontmatter.title}</div>
      <div className={styles.date}>{node.frontmatter.date}</div>
      <div>Read it 👀...</div>
    </Link>
  </div>
);

export default Card;
