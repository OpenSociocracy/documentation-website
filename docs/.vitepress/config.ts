import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenSociocracy",
  description: "Open Source Sociocracy 3.0 Tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "The Project", link: "/about-us/" },
      { text: "Quick Start", link: "/quick-start/" },
      { text: "Contribute", link: "/contributing/" },
      { text: "Hosting", link: "/self-hosting/" },
    ],

    sidebar: {
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
        }
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
            { text: "Organization Domains", link: "/quick-start/defining-s3-organization-domains/" },
            { text: "Consent Decision Making", link: "/quick-start/using-s3-for-decision-making/" },
            // { text: "Defining Domains", link: "/quick-start/defining-s3-domains/" },
            { text: "Peer Reviews", link: "/quick-start/s3-peer-reviews/" },
            { text: "Keeping a Logbook", link: "/quick-start/keeping-an-s3-logbook/" }
          ],
        },
      ],
      "/about-us/": [
        {
          text: "Background",
          items: [
            { text: "Open Source", link: "/about-us/why-use-open-source/" },
            { text: "Build in Public", link: "/about-us/why-build-in-public/" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/orgs/OpenSociocracy" },
      // { icon: 'discord', link: 'https://discord.gg/seExDy6M'},
      { icon: "twitter", link: "https://twitter.com/OpenSociocracy" },
      { icon: "facebook", link: "https://www.facebook.com/OpenSociocracy/" },
      { icon: "mastodon", link: "https://fosstodon.org/@opensociocracy" },
    ],

    footer: {
      message: 'Sponsored by "S3 org name" and "funding org name"',
      copyright: 'Released under the <a href="https://github.com/OpenSociocracy/documentation-website/blob/main/LICENSE">MIT</a> and <a href="https://github.com/OpenSociocracy/open-sociocracy-saas/blob/main/LICENSE">AGPL</a> License</a>.<br />Copyright <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA</a>'
    }
  },
});
