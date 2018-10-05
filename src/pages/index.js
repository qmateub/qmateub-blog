import React from 'react';
import styles from './index.module.css';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1>Quique Mateu Borox</h1>
          <p>
            Full Stack Developer at
            <a href="https://www.devgurus.io/">DevGurus</a>
          </p>
          <p>
            {'Just a place to put quick thoughts on my life as a developer' +
              ', which I loved, specially the journey from when you start learning something to ' +
              'the point that you become really good at that something.'}
          </p>
          <p>Sporadic Volleyball Player 🏐</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
