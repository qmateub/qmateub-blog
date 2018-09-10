import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card';

const Posts = ({ data }) => (
  <div>
    <Link to="/">👈 Go back</Link>
    <p>Check some of the posts!</p>
    {data.allContentfulPost.edges.map(({ node }) => (
      <Card key={node.id} node={node} />
    ))}
  </div>
);

// eslint-disable-next-line
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
