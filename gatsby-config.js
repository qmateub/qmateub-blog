require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Quique Mateu Blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        // eslint-disable-next-line
        spaceId: process.env.SPACE_ID,
        // eslint-disable-next-line
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-react-helmet',
  ],
};
