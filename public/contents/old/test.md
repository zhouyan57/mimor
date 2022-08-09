---
title: 思索 • 测试
author: 谢宇恒
date: 2021-10-21
---

> 一些无聊的测试

# 思索环节 渲染效果

``` sisuo-session
title: 一些无聊的测试

theme:
  color: sky

cards:

- kind: Cloze

  template: |
    君子知夫不全不粹之不足以为美也
    故诵数以贯之 {思索}以通之
    为其人以处之 除其害者以持养之
    -- 荀子 劝学

- kind: QA
  question:
    - 二次方程
    - kind: Formula
      value: ax^2 + bx +c
    - 的求根公式是什么？
  answer:
    - kind: Formula
      value: -b \pm \sqrt{b^2 - 4ac} \over 2a
    - 二 a 分之负 b
    - 加正负根号下的
    - b 方减四 ac

- kind: QA
  question: 人类的本质是什么？
  answer: 复读机

- kind: QA
  question: What's the capital of the USA?
  answer: 我姓邓

- kind: QA
  question: 吃了吗？
  answer: 没吃回家吃去吧

- kind: QA
  question: |
    下面这首诗，是哪首唐诗的英文翻译？

    I asked the boy beneath the pines
    He said: the Master's gone alone
    herb-gathering somewhere on the mount
    cloud-hidden, whereabouts unknown

  answer: |
    寻隐者不遇 贾岛
    译者 林语堂

- kind: QA
  question: |
    幽玄 物哀 侘寂

    这三个日本传统美学关键词
    经谁的阐释而著名？

  answer: |
    日本美学家 大西克礼
    《物哀 -- 櫻花落下後》
    《幽玄 -- 薄明之森》
    《侘寂 -- 素朴日常》

- kind: Cloze

  template: |
    日本美学家 大西克礼
    对日本传统美学的三个关键词
    {幽玄} {物哀} {侘寂}
    进行了系统深入的剖析和阐释
```

# 内容

为了渲染出来，上面的思索环节，
只要在 markdown 的 code block 中编写如下内容，
并标记所用的语言为 `sisuo-session`。

```
title: 一些无聊的测试

theme:
  color: sky

cards:

- kind: Cloze

  template: |
    君子知夫不全不粹之不足以为美也
    故诵数以贯之 {思索}以通之
    为其人以处之 除其害者以持养之
    -- 荀子 劝学

- kind: QA
  question:
    - 二次方程
    - kind: Formula
      value: ax^2 + bx +c
    - 的求根公式是什么？
  answer:
    - kind: Formula
      value: -b \pm \sqrt{b^2 - 4ac} \over 2a
    - 二 a 分之负 b
    - 加正负根号下的
    - b 方减四 ac

- kind: QA
  question: 人类的本质是什么？
  answer: 复读机

- kind: QA
  question: What's the capital of the USA?
  answer: 我姓邓

- kind: QA
  question: 吃了吗？
  answer: 没吃回家吃去吧

- kind: QA
  question: |
    下面这首诗，是哪首唐诗的英文翻译？

    I asked the boy beneath the pines
    He said: the Master's gone alone
    herb-gathering somewhere on the mount
    cloud-hidden, whereabouts unknown

  answer: |
    寻隐者不遇 贾岛
    译者 林语堂

- kind: QA
  question: |
    幽玄 物哀 侘寂

    这三个日本传统美学关键词
    经谁的阐释而著名？

  answer: |
    日本美学家 大西克礼
    《物哀 -- 櫻花落下後》
    《幽玄 -- 薄明之森》
    《侘寂 -- 素朴日常》

- kind: Cloze

  template: |
    日本美学家 大西克礼
    对日本传统美学的三个关键词
    {幽玄} {物哀} {侘寂}
    进行了系统深入的剖析和阐释
```
