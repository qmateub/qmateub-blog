import React from 'react';
import { Link, graphql } from 'gatsby';
import Card from '../components/card';
import Layout from '../components/layout';

const Posts = ({ data }) => (
  <Layout>
    <div>
      <Link to="/">👈 Go back</Link>
      <p>Check some of the posts!</p>
      {data.allContentfulPost.edges.map(({ node }) => (
        <Card key={node.id} node={node} />
      ))}
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title {
            title
          }
          slug
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;

export default Posts;
