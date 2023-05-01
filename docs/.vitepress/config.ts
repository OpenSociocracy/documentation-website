import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open Sociocracy",
  description: "Open Source Sociocracy 3.0 Tools",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'User Manual', link: '/user-manual/' }
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
      { icon: 'github', link: 'https://github.com/orgs/OpenSociocracy' }
    ]
  }
})
