// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const siteTitle = 'pathwaysfaq.de';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title:  siteTitle,
  tagline: 'Ein Projekt, das Pathways für alle deutschsprachigen Toastmasters zugänglicher macht.',
  url: 'https://pathwaysfaq.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          sidebarCollapsible: false,
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexPages: false,
        language: 'de'
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
          {name: 'keywords', content: 'cooking, blog'},
          {name: 'generator', content: 'm'}
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'pathwaysfaq.de',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'pathways/intro',
            position: 'left',
            label: 'Projekte',
          },
          {
            to: 'docs/category/lernpfade',
            position: 'left',
            label: 'Lernpfade',
           },
          {to: '/blog', label: 'Blog', position: 'left'},

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Leitfaden',
            items: [
              {
                label: 'Einstieg',
                to: '/docs/pathways/intro',
              },
              {
                label: 'Lernpfade',
                to: '/docs/category/Lernpfade',
              },
              {
                label: 'Projekte',
                to: '/docs/category/projekte',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'District 95 Homepage',
                href: 'https://toastmasters-95.org/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'D95 Youtube',
                href: 'https://www.youtube.com/c/D95Toastmasters',
              },
            ],
          },
          {
            title: 'Mehr',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Kontakt',
                to: '/kontakt'
              },
              {
                label: 'Impressum',
                to: '/impressum'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ` + siteTitle,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
