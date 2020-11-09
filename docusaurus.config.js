module.exports = {
  title: 'QueryPie Docs',
  tagline: '클라우드에 최적화된 DB 접근제어 솔루션',
  url: 'https://chqeuer-io.github.io',
  baseUrl: '/querypie-docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'chequer-io', // Usually your GitHub org/user name.
  projectName: 'querypie-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'QueryPie',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/chequer-io/querypie-docs',
          label: 'GitHub',
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
              label: 'QueryPie Docs',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'QueryPie.com',
              href: 'https://querypie.com',
            },
            {
              label: 'Blog',
              href: 'https://www.querypie.com/blog/',
            }
          ],
        },
        {
          title: 'Support',
          items: [
            {
              label: 'Technical Support',
              href: 'https://support.querypie.com/hc/ko',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CHEQUER Global, Inc.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
