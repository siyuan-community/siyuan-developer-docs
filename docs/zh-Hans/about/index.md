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
  {
    avatar: 'https://www.github.com/Wetoria.png',
    name: 'Wetoria',
    title: 'vip/vv',
    desc: 'Enhance 插件作者<br><a href="https://wetoria.me" target="_blank">更多介绍</a>',
    sponsor: 'https://simplest-frontend.feishu.cn/wiki/wikcnHmIs4HagSlJPiti2VESQEh#J6QmdYau3o6AETx7vQ0ckWu1nng',
    links: [
      { icon: 'github', link: 'https://github.com/Wetoria' },
      { icon: 'twitter', link: 'https://twitter.com/Wetoriav' },
      { icon: 'mastodon', link: 'https://c7.io/@Wetoria' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>加入我们</template>
    <template #lead>
    本站由思源爱好者们开源构建。
    <br>欢迎更多志同道合者参与，一起构建更好的思源社区。
    <br><br><span id="contactUS">联系我们</span>
    <br><br><LinkQQGroup />
    <br><br><LinkDiscord />
    <br><br><BaseLink href="https://github.com/siyuan-community">Github</BaseLink>
    <br><br>
    以下排名不分先后。
    </template>
  </VPTeamPageTitle>

<VPTeamMembers size="medium" :members="coreMembers" />
</VPTeamPage>
