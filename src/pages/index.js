import React from 'react';
import styles from './index.module.css';
import { Card } from '../components/card/card';

const IndexPage = ({ data }) => (
  <div className={styles.main}>
    <div className={styles.container}>
      <div className={styles.description}>
        <h1>Quique Mateu Borox</h1>
        <p>
          Full Stack Developer at<a href="https://www.devgurus.io/">DevGurus</a>
        </p>
        <p>
          {'Just a place to put quick thoughts on my life as a developer' +
            ', which I loved, specially the journey from when you start learning something to ' +
            'the point that you become really good at that something.'}
        </p>
        <p>Sporadic Volleyball Player 🏐</p>
        <h4>Posts</h4>
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

export default IndexPage;
