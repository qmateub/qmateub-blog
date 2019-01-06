import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from './card.module.css';

export const Card = ({ node }) => {
  const localizedNode = node['en-US'];
  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <AniLink
          fade
          to={`posts/${localizedNode.slug}`}
          className={styles.link}
        >
          <h2 className={styles.title}>{localizedNode.title.title}</h2>
          <div className={styles.date}>{localizedNode.createdAt}</div>
          <p>{localizedNode.textPreview.textPreview}</p>
        </AniLink>
        <AniLink fade to={`posts/${localizedNode.slug}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
          </svg>
        </AniLink>
      </div>
    </div>
  );
};

export default Card;
