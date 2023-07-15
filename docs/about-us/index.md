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
    ],
    desc: 'Over 35 years experience with startups, community building and web development.'
  },
  {
    avatar: 'https://handbook.opensociocracy.org/team/will.png',
    name: 'Will Stedden',
    title: 'Founding Member',
    links: [
      { icon: 'github', link: 'https://github.com/stedn' },
      { icon: 'mastodon', link: 'https://sigmoid.social/@bonkerfield' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/willstedden' }
    ],
    desc: 'Likes to build things, has a passion for economic democracy and getting stuff done.'
  },
]
</script>

# The OpenSociocracy Project

The OpenSociocracy project was started May 1, 2023 by developers at a small tech co-op that were struggling get their own internal sociocracy projects kicked off. We're releasing the code as [open source](/about-us/why-use-open-source/) and developing the product using a [build in public](/about-us/why-build-in-public/) process.

Follow us on [Twitter](https://twitter.com/OpenSociocracy), or join our [Discord](https://discord.gg/GE8NqcJx).

## Project Team

This is an all volunteer effort, the developers are donating their time and hosting resources.

<VPTeamMembers size="small" :members="members" />

## Software Handbook

We have an online [software manual](/software-manual/) to support users of our OpenSociocracy SaaS product. The manual will help new users at each step of the journey to implement sociocracy. The [SaaS product](https://www.ultri.com/logbook) helps fund the development of the open source product, so please consider getting a paid account or a [self hosting support contract](/software-manual/self-hosting/installation-and-support-contracts/).



