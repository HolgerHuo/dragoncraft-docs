// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DragonCraft 菠萝俱乐部',
  tagline: '一个属于你的世界',
  url: 'https://docs.minecraft.dragon-fly.club',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  organizationName: 'holgerhuo', // Usually your GitHub org/user name.
  projectName: 'dragoncraft-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'minecraft,server,survival,我的世界,服务器,生存' }],
      navbar: {
        title: 'DragonCraft 菠萝俱乐部',
        logo: {
          alt: 'pineapple-pixeled',
          src: '/favicon.ico',
        },
        items: [
          { to: '/', label: '主页', position: 'left' },
          { to: '/join', label: '加入', position: 'left' },
          { to: '/help', label: '教程', position: 'left' },
          { to: '/rules', label: '规则', position: 'left' },
          { to: '/activities', label: '活动', position: 'left' },
          { to: '/showcases', label: '图库', position: 'left' },
          { to: '/contact', label: '联系', position: 'left' },
          { to: 'https://minecraft.dragon-fly.club/', label: 'Dynmap(Premium)', position: 'left' },
          {
            href: 'https://mast.dragon-fly.club/about',
            label: 'Island 岛屿',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'DragonCraft',
            items: [
              {
                label: '加入',
                to: '/join',
              },
              {
                label: '教程',
                to: '/help',
              },
              {
                label: '活动',
                to: '/activities',
              },
            ],
          },
          {
            title: 'DragonFly Club',
            items: [
              {
                label: 'Island 岛屿',
                href: 'https://mast.dragon-fly.club/about',
              },
              {
                label: 'DragonRelay',
                href: 'https://relay.dragon-fly.club/',
              },
              {
                label: 'Mravatar',
                href: 'https://mravatar.r669.live',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '关注管理',
                href: 'https://mast.dragon-fly.club/@holgerhuo',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} DragonFly Club 菠萝俱乐部管理团队 Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
