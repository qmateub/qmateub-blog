import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';
import { Location } from '@reach/router';
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

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Blog' },
            { name: 'keywords', content: 'blog, react' },
          ]}
        />
        <Location>
          {({ location }) => <Header title="qmateub" location={location} />}
        </Location>
        <div className="main-content">
          <PageTransition>
            <div>{children}</div>
          </PageTransition>
        </div>
        <Footer />
      </React.Fragment>
    )}
  />
);
Layout.displayName = 'Layout';

export default Layout;
