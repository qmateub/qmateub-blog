import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/card';
import Layout from '../components/layout';
import mapToLocalizedPosts from '../utils/posts';
import styles from './index.module.css';

const Posts = ({ data }) => {
  const localizedPosts = mapToLocalizedPosts(data.allContentfulPost.edges);
  return (
    <Layout>
      <h1>Blog Posts</h1>
      <p>
        Just stuff from various topics that I would like to share. As my mother
        tongue is Spanish, you probably will see that you can read each post in
        English and Spanish despite the blog being fully in English. Why can I
        say? My English stills WIP I guess 🤷‍♂️
      </p>
      <div className={styles.pageBottomSpacer}>
        {Object.values(localizedPosts).map((post, index) => (
          <Card key={index} node={post} />
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          node_locale
          id
          title {
            title
          }
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          textPreview {
            id
            textPreview
          }
        }
      }
    }
  }
`;

export default Posts;
