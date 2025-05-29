import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {
  DISCORD_URL,
  REDDIT_URL,
  TWITTER_URL,
  GITHUB_MAIN_REPO_URL,
  GITHUB_ISSUES_MAIN_URL,
  GITHUB_FEATURES_URL,
  VSCODE_MARKETPLACE_URL,
  OPEN_VSX_URL,
  CONTACT_EMAIL,
  CAREERS_URL,
  WEBSITE_PRIVACY_URL,
  EXTENSION_PRIVACY_URL,
  GITHUB_REPO_URL
} from './src/constants';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Roo Code Docs',
  tagline: 'Roo Code Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.roocode.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: `${GITHUB_REPO_URL}/edit/main/`,
          showLastUpdateTime: true,
        },
        blog: false, // Disable blog feature
        sitemap: {
          lastmod: 'date',
          priority: null,
          changefreq: null,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/",
      },
    ],
  ],

  plugins: [
    ...(process.env.POSTHOG_API_KEY ? [
      [
        "posthog-docusaurus",
        {
          apiKey: process.env.POSTHOG_API_KEY,
          appUrl: "https://us.i.posthog.com",
          enableInDevelopment: true,
        },
      ],
    ] : []),
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Files moved from advanced-usage to features
          {
            to: '/features/checkpoints',
            from: ['/advanced-usage/checkpoints'],
          },
          {
            to: '/features/code-actions',
            from: ['/advanced-usage/code-actions'],
          },
          {
            to: '/features/custom-instructions',
            from: ['/advanced-usage/custom-instructions'],
          },
          {
            to: '/features/custom-modes',
            from: ['/advanced-usage/custom-modes'],
          },
          {
            to: '/features/enhance-prompt',
            from: ['/advanced-usage/enhance-prompt'],
          },
          {
            to: '/features/experimental/experimental-features',
            from: ['/advanced-usage/experimental-features'],
          },
          {
            to: '/features/model-temperature',
            from: ['/advanced-usage/model-temperature'],
          },
          {
            to: '/features/auto-approving-actions',
            from: ['/advanced-usage/auto-approving-actions'],
          },
          {
            to: '/features/api-configuration-profiles',
            from: ['/advanced-usage/api-configuration-profiles'],
          },
          {
            to: '/features/experimental/intelligent-context-condensing',
            from: ['/features/experimental/intelligent-context-condensation'],
          },
          
          // MCP related redirects
          {
            to: '/features/mcp/overview',
            from: ['/advanced-usage/mcp', '/mcp/overview'],
          },
          {
            to: '/features/mcp/using-mcp-in-roo',
            from: ['/mcp/using-mcp-in-roo'],
          },
          {
            to: '/features/mcp/what-is-mcp',
            from: ['/mcp/what-is-mcp'],
          },
          {
            to: '/features/mcp/server-transports',
            from: ['/mcp/server-transports'],
          },
          {
            to: '/features/mcp/mcp-vs-api',
            from: ['/mcp/mcp-vs-api'],
          },
          {
            to: '/features/shell-integration',
            from: ['/troubleshooting/shell-integration'],
          },
          
          // Tools folder moved from features to advanced-usage
          {
            to: '/advanced-usage/available-tools/access-mcp-resource',
            from: ['/features/tools/access-mcp-resource'],
          },
          {
            to: '/advanced-usage/available-tools/apply-diff',
            from: ['/features/tools/apply-diff'],
          },
          {
            to: '/advanced-usage/available-tools/ask-followup-question',
            from: ['/features/tools/ask-followup-question'],
          },
          {
            to: '/advanced-usage/available-tools/attempt-completion',
            from: ['/features/tools/attempt-completion'],
          },
          {
            to: '/advanced-usage/available-tools/browser-action',
            from: ['/features/tools/browser-action'],
          },
          {
            to: '/advanced-usage/available-tools/execute-command',
            from: ['/features/tools/execute-command'],
          },
          {
            to: '/advanced-usage/available-tools/insert-content',
            from: ['/features/tools/insert-content'],
          },
          {
            to: '/advanced-usage/available-tools/list-code-definition-names',
            from: ['/features/tools/list-code-definition-names'],
          },
          {
            to: '/advanced-usage/available-tools/list-files',
            from: ['/features/tools/list-files'],
          },
          {
            to: '/advanced-usage/available-tools/new-task',
            from: ['/features/tools/new-task'],
          },
          {
            to: '/advanced-usage/available-tools/read-file',
            from: ['/features/tools/read-file'],
          },
          {
            to: '/advanced-usage/available-tools/search-and-replace',
            from: ['/features/tools/search-and-replace'],
          },
          {
            to: '/advanced-usage/available-tools/search-files',
            from: ['/features/tools/search-files'],
          },
          {
            to: '/advanced-usage/available-tools/switch-mode',
            from: ['/features/tools/switch-mode'],
          },
          {
            to: '/advanced-usage/available-tools/tool-use-overview',
            from: ['/features/tools/tool-use-overview'],
          },
          {
            to: '/advanced-usage/available-tools/use-mcp-tool',
            from: ['/features/tools/use-mcp-tool'],
          },
          {
            to: '/advanced-usage/available-tools/write-to-file',
            from: ['/features/tools/write-to-file'],
          },
          {
            to: '/advanced-usage/roo-code-nightly',
            from: ['/advanced-usage/prerelease-build'],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/social-share.png',
    navbar: {
      logo: {
        alt: 'Roo Code Logo',
        src: 'img/roo-code-logo-white.png',
        srcDark: 'img/roo-code-logo-dark.png',
      },
      items: [
        {
          href: GITHUB_MAIN_REPO_URL,
          label: 'GitHub',
          position: 'right',
        },
        {
          href: VSCODE_MARKETPLACE_URL,
          label: 'Install Extension',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: DISCORD_URL,
            },
            {
              label: 'Reddit',
              href: REDDIT_URL,
            },
            {
              label: 'Twitter',
              href: TWITTER_URL,
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'Issues',
              href: GITHUB_ISSUES_MAIN_URL,
            },
            {
              label: 'Feature Requests',
              href: GITHUB_FEATURES_URL,
            },
          ],
        },
        {
          title: 'Download',
          items: [
            {
              label: 'VS Code Marketplace',
              href: VSCODE_MARKETPLACE_URL,
            },
            {
              label: 'Open VSX Registry',
              href: OPEN_VSX_URL,
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Contact',
              href: CONTACT_EMAIL,
              target: '_self',
            },
            {
              label: 'Careers',
              href: CAREERS_URL,
            },
            {
              label: 'Website Privacy Policy',
              href: WEBSITE_PRIVACY_URL,
            },
            {
              label: 'Extension Privacy Policy',
              href: EXTENSION_PRIVACY_URL,
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
