import React from 'react';
import { Link, graphql } from 'gatsby';

export default ({ data }) => {
  const { title, createdAt, body } = data.contentfulPost;
  return (
    <div>
      <Link to="/posts">Go back</Link>
      <h1>{title.title}</h1>
      <p>{createdAt}</p>
      {body.body}
    </div>
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
