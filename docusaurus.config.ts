import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "C-Cloud",
  tagline: "C-Cloud: Documentation Guide",
  // favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          // lastVersion: "current",
          // versions: {
          //   current: {
          //     label: "1.0.0",
          //     path: "1.0.0",
          //   },
          // },
          // lastVersion: undefined,
          // includeCurrentVersion: false,
          // versions: {
          //   "2.0.0": {
          //     label: "2.0.0",
          //     path: "2.0.0",
          //   },
          //   "1.0.0": {
          //     label: "1.0.0",
          //     path: "1.0.0",
          //   },
          // },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            "https://github.com/safaminhaj/docusaurus-demo/edit/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    algolia: {
      appId: "WN0Z1IN0L1",

      apiKey: "0f74908dcc3d65a132312c845306e711",

      indexName: "usaurus-demo-nine",
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "ComplianceCloud Documentation",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Tutorial",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Tutorial",
    //           to: "/docs/intro",
    //         },
    //       ],
    //     },
    //     // {
    //     //   title: "Community",
    //     //   items: [
    //     //     {
    //     //       label: "Stack Overflow",
    //     //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
    //     //     },
    //     //     {
    //     //       label: "Discord",
    //     //       href: "https://discordapp.com/invite/docusaurus",
    //     //     },
    //     //     {
    //     //       label: "X",
    //     //       href: "https://x.com/docusaurus",
    //     //     },
    //     //   ],
    //     // },
    //     // {
    //     //   title: "More",
    //     //   items: [
    //     //     {
    //     //       label: "Blog",
    //     //       to: "/blog",
    //     //     },
    //     //     {
    //     //       label: "GitHub",
    //     //       href: "https://github.com/facebook/docusaurus",
    //     //     },
    //     //   ],
    //     // },
    //   ],
    //   copyright: `Copyright © Compliance Cloud ${new Date().getFullYear()}`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
