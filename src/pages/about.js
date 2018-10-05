import React from 'react';
import Link from 'gatsby-link';

const SecondPage = ({ data }) => {
  console.log(data);
  const author = data.allContentfulAuthor.edges[0].node;
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: author.biography.childMarkdownRemark.html,
        }}
      />
      <img
        src={author.profilePhoto.file.url}
        alt={author.name}
        height="200"
        width="200"
      />
      <br/>
      <Link to="/">Go back to the homepage👈</Link>
    </div>
  );
};

// eslint-disable-next-line
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
