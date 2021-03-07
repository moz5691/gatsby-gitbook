// "<a href=''><img class='img-responsive' src='' alt='logo'/>Cloud & Code</a>"
const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://www.example.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://www.cloudcode.website/',
    title: "<h1>&nbsp;&nbsp; Cloud & Code</h1>"
     ,
    githubUrl: 'https://github.com',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://tweeter.com" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img  src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
`,
    links: [{ text: 'Example', link: 'https://www.example.com' }, { text: 'StackOverflow', link: 'https://stackoverflow.com/' }],
    search: {
      enabled: true,
      indexName: 'dev_gatsby',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/pre-req',
      '/plan-diagram',
      '/multiple-env',
      '/load_balancer',
      '/auto-scaling',
      '/user-data',
      '/key-management',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Google', link: 'https://google.com' }, { text: 'Amazon', link: 'https://www.amazon.com' }, { text: 'Apple', link: 'https://www.apple.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href=''>MAKE</a><div class='greenCircle'></div><a href=''>SAFE</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate',
    description: 'Documentation built with Gatsby ',
    ogImage: null,
    docsLocation: 'https://github.com/moz5691/gatsby-gitbook/tree/main/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
