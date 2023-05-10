---
layout: page
---
<script setup language="typescript">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://handbook.opensociocracy.org/team/brian.jpg',
    name: 'Brian Winkers',
    title: 'Creator',
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

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of OpenSociocracy is a small but growing effort, join today.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

