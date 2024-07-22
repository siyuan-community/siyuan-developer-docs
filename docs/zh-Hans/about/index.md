---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://www.github.com/zuoez02.png',
    name: 'zuoez02',
    title: 'Z佬',
    links: [
      { icon: 'github', link: 'https://github.com/zuoez02' },
      { icon: 'twitter', link: 'https://twitter.com/zuoez02' }
    ]
  },
  {
    avatar: 'https://www.github.com/frostime.png',
    name: 'frostime',
    title: 'F佬',
    links: [
      { icon: 'github', link: 'https://github.com/frostime' },
    ]
  },
  {
    avatar: 'https://www.github.com/Zuoqiu-Yingyi.png',
    name: 'Zuoqiu-Yingyi',
    title: '萌佬',
    links: [
      { icon: 'github', link: 'https://github.com/Zuoqiu-Yingyi' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>加入我们</template>
    <template #lead>
    本站由思源爱好者们开源构建，欢迎更多志同道合者参与，一起构建思源开发社区。
    <br><br>QQ群: 201266294
    <br><br>
    以下排名不分先后。
    </template>
  </VPTeamPageTitle>

<VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
