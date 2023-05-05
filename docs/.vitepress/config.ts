import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenSociocracy",
  description: "Open Source Sociocracy 3.0 Tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'The Project', link: '/about-us/' },
      { text: 'Quick Start', link: '/quick-start/' },
      { text: 'Contributing', link: '/contributing/' }
    ],

    sidebar: [
      {
        text: 'User Manual',
        items: [
          { text: 'Create an account', link: '/user-manual/join' },
          { text: 'Create an organization', link: '/user-manual/organizations' },
          { text: 'Drivers', link: '/user-manual/drivers' },
          { text: 'Domains', link: '/user-manual/domains' },
          { text: 'Agreements', link: '/user-manual/agreements' },
          { text: 'Objections', link: '/user-manual/objections' },
          { text: 'Governance and Operations', link: '/user-manual/governance-operations' },
        ]
      },
      {
        text: 'Self-Hosting',
        items: [
          { text: 'Prerequisites', link: '/self-hosting/prerequisites' },
          { text: 'Hosting on AWS', link: '/self-hosting/cloud-hosting-on-aws' },
          { text: 'Hosting On-site', link: '/self-hosting/onsite-hosting' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/OpenSociocracy' },
      // { icon: 'discord', link: 'https://discord.gg/seExDy6M'},
      { icon: 'twitter', link: 'https://twitter.com/OpenSociocracy'},
      { icon: 'facebook', link: 'https://www.facebook.com/OpenSociocracy/'},
      { icon: 'mastodon', link: 'https://fosstodon.org/@opensociocracy'}
    ]
  }
})
