---
title: 迷墨链接
---

像 [只读链接](https://readonly.link/manuals/https://readonly.link/contents/manual/zh.json/-/kinds-of-contents/article.md) 可以将任意一个到 Markdown 文件的链接，渲染成一篇文章一样。

**迷墨链接** 可以将任意一个写好了卡片内容的 `.mimor` 文件链接，渲染成一段卡片问答。

## 使用方式

你可以在浏览器的地址栏输入 `.mimor` 文件的链接。

格式如下：

```
https://mimor.app/mimors/:link
```

你也可以在 [**mimor.app/mimors**](https://mimor.app/mimors) 页面直接输入链接。

## 举例

比如我们测试用的一个迷墨链接是：

`https://mimor.app/contents/examples/sisuo.mimor`

那么 [渲染的链接](https://mimor.app/mimors/https://mimor.app/contents/examples/sisuo.mimor) 就是：

[`https://mimor.app/mimors/https://mimor.app/contents/examples/sisuo.mimor`](https://mimor.app/mimors/https://mimor.app/contents/examples/sisuo.mimor)

点开的效果应该是像下面这样。

<mimor src="https://mimor.app/contents/examples/sisuo.mimor" />

这个时候有的读者就要问了。
点开连接会打开另外一个网站去展示 mimor，我能理解。
可是 mimor 是如何像上面这样何嵌入在这个文档中的呢？

这个你就有所不知了，这个文档是用 [只读链接](https://readonly.link) 渲染的，
你只要看 [只读链接手册](https://readonly.link/manuals/https://readonly.link/contents/manual/zh.json) 就能学会了。

在上面的 mimor 中，你可以点击 `</>` 按钮来看看 `.mimor` 文件的源代码。
在之后的章节中，我们会介绍如何在 `.mimor` 中编写卡片。
