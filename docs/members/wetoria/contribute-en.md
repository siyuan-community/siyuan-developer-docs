---
title: How to contribute for community
date: '2024-08-09 17:57:31'
head: []
locale: 'en'
outline: deep
---

# How to contribute for community

The Siyuan Community thrives thanks to everyone's contributions, and we welcome new contributors to participate in editing the documentation.

‍

## I’m not familiar with such complex tasks, how can I contribute? {#my-anchor}

If you find this process too complex, you can directly post your content on the [forum](https://liuyun.io/).
Community members will notice your content and help you place the documentation in the appropriate location.

‍

## How Community Members Can Contribute

Thanks to [@Wetoria](https://wetoria.me) and [@terwer](https://github.com/terwer) for their contributions.

Now, you can directly publish articles to this site via Siyuan 🎉.

‍

### Publishing Articles Directly from Siyuan

Install the publishing tool (siyuan-plugin-publisher) from the Marketplace, and configure the `VitePress`​ authorization to quickly publish documents to this site.

Here is a sample configuration:

<img src="./assets/image-20240809104307435.png" alt="image-20240809104307435" style="zoom:50%;" />

<img src="./assets/image-20240809104314347.png" alt="image-20240809104314347" style="zoom:50%;" />

‍

### Locales

The Siyuan community documentation currently supports Simplified Chinese (zh-Hans) and English (en).

If you're willing to contribute to other locales, you can create other versions of documents.

For writing convenience, the following locale list is used when handling locale of articles:

- zh
- en

By following the rules explained later, adding the above locale configuration will automatically categorize the article into the appropriate language.

You can use the following two ways to create different versions of articles:

1. Using filenames
2. Using frontmatter

‍

#### Using Filenames

When you use filenames, it will match according to `-[locale]`​.

For example, the filename of this document is `contribute-en.md`​, which will be categorized under the English language.

Similarly, the English version of this document `contribute-zh.md`​ will be categorized under the Chinese language.

::: tip

If the suffix is not like `-[locale]`​, it will default to categorizing under Chinese.

:::

#### Using frontmatter

At the top of your article, use YAML frontmatter to configure the `locale`​ parameter to categorize the article under the corresponding language.

Sample configuration:

```markdown
---
title: Title of an article
locale: 'en' // [!code focus]
---

<!-- Here is your article content -->
```

This article, `Title of an article`​, will be displayed under the English environment.

‍

### Article Publishing Logic

After publishing an article under `members/[yours]/`​, you can view all articles in [this section](/contents/).

The corresponding i18n versions will be listed under the `/[locale]/contents`​ directories. You can see an example [here](/en/contents/).

‍

#### How to Categorize Documents under the Correct Page

In the repository `/docs/.vitepress/components/Forward`​, the `ForwardDoc.vue`​ component is provided.

You only need to use it as shown below to embed your document content within a page. It supports selecting line ranges. For more details, refer to [Markdown Files](https://vitepress.dev/zh/guide/markdown#markdown-file-inclusion).

```vue
<ForwardDoc
  member\="[yours]"
>
  <!-- To prevent a loop, extra space was added inside angle brackets -->
  < !--@include: ../../members/wetoria/contribute-zh.md-- >
</ForwardDoc>
```

The `member`​ parameter is your folder name, intended to correctly fetch image resources when embedding.

:::warning

1. Currently, relative path links are not handled. If your article uses relative paths, it might result in a 404 error.

   This is not an issue in the automatically generated contents directory.

2. If the file is not under the `members`​ directory, please do not use this component for now.

   The component internally handles image paths, and using other paths may cause issues.

:::

‍

### Guidelines & Conventions

‍

#### 1. Considerations When Configuring the Publishing Tool

Please configure the publishing tool's,

1. ​`Storage Directory`​ to `docs/members/[yourname]`​.
2. ​`Image Storage Directory`​ to the above `Storage Directory` under `assets`​, i.e, `docs/members/[yourname]/assets`​.

‍

#### 2. Manually Created Markdown Files

If you manually create Markdown files, for better display in the sidebar, please configure the `title`​ in the `frontmatter`​ at the top.

‍

#### 3. About Article Order

To make it easier for Community members to publish content without needing to configure the directory specifically, the repository organizes content by person.

This way, you can publish content with a single click via the publishing plugin.

‍

:::info

VitePress organizes pages by directory.

:::

‍

To ensure all content is centrally displayed, the site will automatically generate the left SideBar content based on member contributions, as you see on this page 👈.

To control the display order of articles, they will be sorted by the `last modified date`.

Therefore, please avoid maliciously adjusting the last modified date to influence sorting.

Otherwise, community members have the right to delete your document, and serious offenders may have their community membership revoked.

‍

#### 4. About Images

When writing, please place images in `your personal directory/assets`​, and ensure that the image paths in the article use `relative paths`​.

Just like the two images earlier in this article, the inserted content is:

‍

```
![image-20240809103113857](./assets/image-20240809103113857.png)

![image-20240809103130681](./assets/image-20240809103130681.png)
```

If you are manually writing Markdown files, you can use Typora to paste directly. The related configuration is as follows:

​![image-20240809103732573](./assets/image-20240809103732573.png)

## How Non-Community Members Can Contribute

Due to a previous incident where the Siyuan community suffered from a malicious repository deletion, not everyone can immediately join the organization and contribute using the above methods.

However, not joining the organization does not mean you can't contribute. You can still participate through the following methods:

### Forum Posting

You can contribute by posting your content on the forum as [mentioned earlier](#my-anchor).

‍

### PR

You can also fork the [siyuan-developer-docs](https://github.com/siyuan-community/siyuan-developer-docs)​ repository and create your content the same way, contributing via a PR.

‍

## Getting Support

If you need help, <a href="/zh-Hans/about/#contactUS" style="color: var(--vp-c-brand-1);" target="_blank">Contact US</a>.
