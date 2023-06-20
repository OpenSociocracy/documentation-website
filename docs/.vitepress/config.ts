import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenSociocracy",
  description: "Open Source Sociocracy Tools",
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-RBJ2CFDH36",
      },
    ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-RBJ2CFDH36');",
    ],
  ],
  themeConfig: {
    logo: "logo_light.jpg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "The Project", link: "/about-us/" },
      { text: "Quick Start", link: "/quick-start/" },
      { text: "Contribute", link: "/contributing/" },
      //{ text: "Hosting", link: "/self-hosting/" },
    ],

    sidebar: {
      "/contributing/": [
        {
          text: "Code Repos",
          items: [
            {
              text: "Server Code",
              link: "https://github.com/OpenSociocracy/opensociocracy-platform",
            },
            {
              text: "Handbook Repository",
              link: "https://github.com/OpenSociocracy/documentation-website",
            },
          ],
        },
        {
          text: "Governance",
          items: [
            {
              text: "Code of Conduct",
              link: "https://github.com/OpenSociocracy/opensociocracy-platform/blob/main/CONTRIBUTING.md",
            },
            { text: "Governance", link: "https://discord.gg/pawVfw43" },
            {
              text: "Project Plan",
              link: "https://github.com/orgs/OpenSociocracy/projects/1",
            },
          ],
        },
      ],
      "/opensociocracy-user-manual/": [
        {
          text: "User Manual",
          items: [
            { text: "Create an account", link: "/user-manual/join" },
            {
              text: "Create an organization",
              link: "/user-manual/organizations",
            },
            { text: "Drivers", link: "/user-manual/drivers" },
            { text: "Domains", link: "/user-manual/domains" },
            { text: "Agreements", link: "/user-manual/agreements" },
            { text: "Objections", link: "/user-manual/objections" },
            {
              text: "Governance and Operations",
              link: "/user-manual/governance-operations",
            },
          ],
        },
      ],
      "/self-hosting/": [
        {
          text: "Self-Hosting",
          items: [
            { text: "Prerequisites", link: "/self-hosting/prerequisites" },
            {
              text: "Hosting on AWS",
              link: "/self-hosting/cloud-hosting-on-aws",
            },
            { text: "Hosting On-site", link: "/self-hosting/onsite-hosting" },
          ],
        },
      ],
      "/quick-start/": [
        {
          text: "Quick Starts",
          items: [
            {
              text: "Organize Your Efforts",
              collapsed: true,
              items: [
                {
                  text: "Keep a Logbook",
                  link: "/quick-start/keeping-a-sociocracy-logbook/",
                },
                {
                  text: "Define Drivers",
                  link: "/quick-start/defining-business-drivers/",
                },
                {
                  text: "Define Domains",
                  link: "/quick-start/defining-sociocracy-domains/",
                },
              ],
            },
            // { text: "Keep a Logbook", link: "/quick-start/keeping-a-sociocracy-logbook/" },
            // { text: "Define Drivers", link: "/quick-start/defining-business-drivers/" },
            // { text: "Define Domains", link: "/quick-start/defining-sociocracy-domains/" },
            {
              text: "Create Proposals",
              link: "/quick-start/creating-sociocracy-proposals/",
            },
            {
              text: "Make Decisions",
              link: "/quick-start/using-sociocracy-for-decision-making/",
            },
            {
              text: "Form Agreements",
              link: "/quick-start/forming-business-agreements/",
            },
            {
              text: "Improve Your Efforts",
              collapsed: true,
              items: [
                {
                  text: "Implement Retrospectives",
                  link: "/quick-start/retrospectives-in-sociocracy/",
                },
                {
                  text: "Use Peer Reviews",
                  link: "/quick-start/sociocracy-peer-reviews/",
                },
              ],
            },
          ],
        },
      ],
      "/about-us/": [
        {
          text: "Background",
          items: [
            { text: "Who We Are", link: "/about-us/" },
            { text: "Open Source", link: "/about-us/why-use-open-source/" },
            { text: "Build in Public", link: "/about-us/why-build-in-public/" },
            { text: "Software Manual", link: "/software-manual/" },
            { text: "Glossary", link: "/glossary/" },
            { text: "FAQ", link: "/faq/" },
          ],
        },
      ],
      "/software-manual/": [
        {
          text: "Software Manual",
          items: [{ text: "Home", link: "/software-manual/" }],
        },
        {
          text: "Accessing OpenSociocracy",
          items: [
            {
              text: "Create Membership",
              link: "/software-manual/create-membership/",
            },
            { text: "Sign In", link: "/software-manual/sign-in/" },
            { text: "Sign Out", link: "/software-manual/sign-out/" },
            { text: "Invites", link: "/software-manual/invites/" },
          ],
        },
        {
          text: "Logbook Manual",
          items: [
            { text: "Drivers", link: "/software-manual/drivers/" },
            { text: "Domains", link: "/software-manual/domains/" },
            { text: "Proposals", link: "/software-manual/proposals/" },
            { text: "Decisions", link: "/software-manual/decisions/" },
            { text: "Agreements", link: "/software-manual/agreements/" },
            { text: "Peer Review", link: "/software-manual/peer-reviews/" },
          ],
        },
        {
          text: "Self-Hosting",
          items: [
            {
              text: "Prerequisites",
              link: "/software-manual/self-hosting/prerequisites",
            },
            {
              text: "Hosting on AWS",
              link: "/software-manual/self-hosting/cloud-hosting-on-aws",
            },
            {
              text: "Hosting On-site",
              link: "/software-manual/self-hosting/onsite-hosting",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/orgs/OpenSociocracy" },
      // { icon: 'discord', link: 'https://discord.gg/pawVfw43'},
      { icon: "twitter", link: "https://twitter.com/OpenSociocracy" },
      { icon: "facebook", link: "https://www.facebook.com/OpenSociocracy/" },
      { icon: "mastodon", link: "https://fosstodon.org/@opensociocracy" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/opensociocracy/",
      },
    ],

    footer: {
      message: 'Sponsored by [Ultri.com](https://coop.ultri.com/)',
      copyright:
        'Released under the <a href="https://github.com/OpenSociocracy/documentation-website/blob/main/LICENSE">MIT</a> and <a href="https://github.com/OpenSociocracy/opensociocracy-platform/blob/main/LICENSE">AGPL</a> License</a>.<br />Copyright <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA</a>',
    },

    editLink: {
      pattern:
        "https://github.com/OpenSociocracy/documentation-website/tree/main/docs/:path",
    },
  },
});
