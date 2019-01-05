import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const SecondPage = ({ data }) => {
  const author = data.allContentfulAuthor.edges[0].node;
  return (
    <Layout>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: author.biography.childMarkdownRemark.html,
          }}
          style={{ padding: 0 }}
        />
        <img
          src={author.profilePhoto.file.url}
          alt={author.name}
          height="200"
          width="200"
        />
        <br />
        <Link to="/">Go back to the homepage👈</Link>
      </div>
    </Layout>
  );
};

export const authorQuery = graphql`
  query authorQuery {
    allContentfulAuthor(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          name
          website
          biography {
            childMarkdownRemark {
              html
            }
          }
          profilePhoto {
            id
            file {
              url
              fileName
              contentType
              url
            }
          }
        }
      }
    }
  }
`;

export default SecondPage;
