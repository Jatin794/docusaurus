const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Jatin Nagpal',
  tagline: 'Welcome to my In-Progress main page',
  url: 'https://jatinnagpal.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Jatin Nagpal', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Shiny Button',
      logo: {
        alt: 'Shiny Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Welcome',
          position: 'left',
          label: 'Main Content',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.linkedin.com/in/jatinngpl/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Personals',
          items: [
            {
              label: 'Portfolio (coming soon)',
              href: 'https://about.jatinnagpal.com',
            },
            {
              label: 'Goodreads',
              href: 'https://goodreads.com/JatinNagpal',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/JatinNagpalTG',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Videos and Private Content Service (Coming soon)',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Jatin794',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jatin Nagpal. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Jatin794/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Jatin794/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
