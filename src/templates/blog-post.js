import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import styles from './blog-post.module.css';

export default class BlogPost extends React.PureComponent {
  static displayName = 'BlogPost';
  state = {
    language: 'en',
  };
  render() {
    const { title, createdAt, body, author } = this.props.data[
      this.state.language
    ];
    return (
      <Layout>
        <div
          onClick={() =>
            this.setState(prevState => ({
              language: prevState.language === 'en' ? 'es' : 'en',
            }))
          }
        >
          {this.state.language === 'en'
            ? 'Read it in Spanish 👀'
            : 'Read it in English 👀'}
        </div>
        <div className={styles.title}>
          <div className={styles.date}>
            {createdAt.split(' ').map(part => (
              <div key={part}>{part}</div>
            ))}
          </div>
          <div className={styles.titleBody}>
            <div
              style={{ borderBottom: '1px solid #a8a7a8', fontSize: '20px' }}
            >
              <b>{title.title}</b>
            </div>
            <i>
              {this.state.language === 'en'
                ? 'Posted be 👀'
                : 'Publicado por 👀'}{' '}
              {author[0].name}
            </i>
          </div>
        </div>
        <div style={{ marginLeft: '80px', marginTop: '10px' }}>
          <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />
          <Link to="/posts">Go back</Link>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    en: contentfulPost(slug: { eq: $slug }, node_locale: { eq: "en-US" }) {
      title {
        title
      }
      createdAt(formatString: "DD MMMM YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
      }
    }
    es: contentfulPost(slug: { eq: $slug }, node_locale: { eq: "es-ES" }) {
      title {
        title
      }
      createdAt(formatString: "DD MMMM YYYY", locale: "es-ES")
      body {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
      }
    }
  }
`;
