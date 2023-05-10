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
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

