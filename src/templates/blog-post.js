import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
  const { title, createdAt, body } = data.contentfulPost;
  return (
    <Layout>
      <div>
        <Link to="/posts">Go back</Link>
        <h1>{title.title}</h1>
        <p>{createdAt}</p>
        {body.body}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title {
        title
      }
      createdAt(formatString: "MMMM DD, YYYY")
      body {
        id
        body
      }
    }
  }
`;
