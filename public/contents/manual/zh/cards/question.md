---
title: <问>
---

问答卡片的语法是 `<问>` 里面一个 `<答>`。

比如：

```xml
<问>
  二次方程 a*x**2 + b*x +c 的求根公式是什么？

  <答>
    二 a 分之负 b 加减根号下的 b 方减四 ac。
  </答>
</问>

<问>
  下面这首诗，是哪首唐诗的英文翻译？

  I asked the boy beneath the pines;
  He said: the Master's gone alone;
  herb-gathering somewhere on the mount;
  cloud-hidden, whereabouts unknown.

  <答>
    《寻隐者不遇》贾岛，译者林语堂。
  </答>
</问>

```

效果如下：

<mimor src="question-example-1.mimor" />

## 元数据

如果你点开 `</>` 来看上面卡片的源代码。

你会发现代码的开头写了一行：

```xml
<元数据 主题色="红" />
```

也就是说，我们可以用 `<元数据>` 来指定主要的内容数据（卡片）之外的信息。

比如上面的 `主题色`，它的值可以是：

- 赤（红）、橙、黄、绿、蓝（青）、靛、紫。
- 墨、白。
