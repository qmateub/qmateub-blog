import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card';

const Posts = ({ data }) => (
  <div>
    <Link to="/">👈 Go back</Link>
    <p>Check some of the posts!</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Card key={node.id} node={node} />
      ))}
    </div>
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(skip: 0, limit: 2) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Posts;
