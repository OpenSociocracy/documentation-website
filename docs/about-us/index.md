<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://handbook.opensociocracy.org/team/brian.jpg',
    name: 'Brian Winkers',
    title: 'Founding Member',
    links: [
      { icon: 'github', link: 'https://github.com/bwinkers' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/bwinkers/' }
    ]
  },
  {
    avatar: 'https://handbook.opensociocracy.org/team/will.png',
    name: 'Will Stedden',
    title: 'Founding Member',
    links: [
      { icon: 'github', link: 'https://github.com/OpenSociocracy/' },
      { icon: 'website', link: 'https://will.stedden.org' }
    ]
  },
]
</script>

# The OpenSociocracy Project

The OpenSociocracy project was started May 1, 2023 by developers at a small tech co-op that were struggling get their own internal Sociocracy projects kicked off. We're releasing the code as [open source](/about-us/why-use-open-source/) and developing the product using a [build in public](/about-us/why-build-in-public/) process.

Follow us on [Twitter](https://twitter.com/OpenSociocracy), or join our [Discord](https://discord.gg/pawVfw43).

## Project Team

This is an all volunteer effort, the developers are donating their time and hosting resources.

<VPTeamMembers size="small" :members="members" />




