module.exports = {
  siteMetadata: {
    title: 'Quique Mateu Blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        // eslint-disable-next-line
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
  ],
};
