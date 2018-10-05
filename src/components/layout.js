import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import '../layouts/index.css';
import '../styles/layout-overide.css';

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Blog' },
            { name: 'keywords', content: 'blog, react' },
          ]}
        />
        <Header title={'qmateub'} />
        <div className="main-content">{children}</div>
        <Footer />
      </div>
    )}
  />
);
