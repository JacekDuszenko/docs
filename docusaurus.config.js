// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reviewpad Documentation',
  url: 'https://docs.reviewpad.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'reviewpad',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-TXP57QKJD8',
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/reviewpad/docs/tree/main',
          editCurrentVersion: true,
        },
        blog: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'reviewpad, pull requests, code review, automation, github action' },
        { name: 'description', content: 'Reviewpad is an easy to use GitHub Action to automate the GitHub workflow and accelerate the software delivery lifecycle.' },
        { name: 'theme-color', content: '#00337e' },
        { property: 'og:image', content: 'https://reviewpad.com/wp-content/uploads/2022/07/Reviewpad-SEO.png' },
        { property: 'og:image:width', content: '2048' },
        { property: 'og:image:height', content: '1024' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Reviewpad | Documentation' },
        { property: 'og:description', content: 'Reviewpad is an easy to use GitHub Action to automate the GitHub workflow and accelerate the software delivery lifecycle.' },
        { property: 'og:url', content: 'https://docs.reviewpad.com/' },
        { property: 'og:site_name', content: 'Reviewpad | Pull Request Automation' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@reviewpad' },
        { name: 'twitter:title', content: 'Reviewpad | Documentation' },
        { name: 'twitter:description', content: 'Reviewpad is an easy to use GitHub Action to automate the GitHub workflow and accelerate the software delivery lifecycle.' },
        { name: 'twitter:image', content: 'https://reviewpad.com/wp-content/uploads/2022/07/Reviewpad-SEO.png' },
        { name: 'twitter:image:width', content: '2048' },
        { name: 'twitter:image:height', content: '1024' },
      ],
      navbar: {
        title: 'Reviewpad',
        logo: {
          alt: 'Reviewpad Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark_mode.svg',
          href: '/'
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/changelog', label: 'Changelog', position: 'left' },
          {
            href: 'https://github.com/reviewpad/reviewpad/discussions',
            label: 'Discussions',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/reviewpad/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'U3TSN8RPIZ',

        // Public API key: it is safe to commit it
        apiKey: '697bf1398169fbf5dc37592b2ed6a715',

        indexName: 'maester',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About us',
                href: 'https://reviewpad.com/about-us/',
              },
              {
                label: 'Join us',
                href: 'https://reviewpad.com/about-us#careers',
              },
              {
                label: 'Press kit',
                href: 'https://reviewpad.com/press-kit',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/reviewpad',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/reviewpad',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/reviewpad',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms and Conditions',
                href: 'https://reviewpad.com/terms-and-conditions/',
              },
              {
                label: 'Privacy Policy',
                href: 'https://reviewpad.com/privacy-policy',
              },
              {
                label: 'Legal information',
                href: 'https://reviewpad.com/legal-information/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Reviewpad Logo',
          src: 'img/logo_footer.svg',
          href: 'https://reviewpad.com',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Explore.dev. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;