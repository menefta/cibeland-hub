import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CIBELAND Hub',
  tagline: 'El cerebro de la tienda online de mascotas',
  favicon: 'img/favicon.svg',
  url: 'https://menefta.github.io',
  baseUrl: '/cibeland-hub/',
  organizationName: 'menefta',
  projectName: 'cibeland-hub',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  i18n: {defaultLocale: 'es', locales: ['es']},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          editUrl: 'https://github.com/menefta/cibeland-hub/edit/main/'
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'}
      } satisfies Preset.Options
    ]
  ],
  themeConfig: {
    image: 'img/cibeland-social-card.svg',
    navbar: {
      title: 'CIBELAND',
      logo: {alt: 'Logo CIBELAND', src: 'img/cibeland-logo-oficial.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'cibelandSidebar', position: 'left', label: 'Repositorio'},
        {to: '/docs/productos/catalogo', label: 'Productos', position: 'left'},
        {to: '/docs/ideas/backlog', label: 'Ideas', position: 'left'},
        {href: 'https://github.com/menefta/cibeland-hub', label: 'GitHub', position: 'right'}
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'CIBELAND', items: [{label: 'Repositorio', to: '/docs/intro'}, {label: 'Catálogo', to: '/docs/productos/catalogo'}]},
        {title: 'Operaciones', items: [{label: 'Proveedores', to: '/docs/proveedores/listado'}, {label: 'Procedimientos', to: '/docs/procedimientos/lanzar-producto'}]}
      ],
      copyright: `© ${new Date().getFullYear()} CIBELAND`
    },
    colorMode: {defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: true},
    prism: {additionalLanguages: ['bash', 'json']}
  } satisfies Preset.ThemeConfig
};

export default config;
