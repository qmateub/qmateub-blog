import React from 'react';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Quique Mateu Borox</h1>
    <p>
      Full Stack Developer at&nbsp;
      <a href="https://www.devgurus.io/">DevGurus</a>
    </p>
    <p>
      {'Just a place to put quick thoughts on my life as a developer' +
        ', which I loved, specially the journey from when you start learning something to ' +
        'the point that you become really good at that something.'}
    </p>
    <p>Sporadic Volleyball Player 🏐</p>
  </Layout>
);

export default IndexPage;
