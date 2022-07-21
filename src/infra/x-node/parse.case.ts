import { TestCase } from "@xieyuheng/test-case"
import { parseNodes } from "./parse"

export default class extends TestCase {
  "test basic"() {
    const nodes = parseNodes(
      `
<question class="text-2xl" color="red"> Hello world </question>

note

<answer> hi </answer>
`
    )

    this.assertEquals(nodes, [
      "\n",
      {
        tag: "question",
        attributes: { class: "text-2xl", color: "red" },
        children: [" Hello world "],
      },
      "\n\nnote\n\n",
      { tag: "answer", attributes: {}, children: [" hi "] },
      "\n",
    ])
  }

  "test Chinese tag name"() {
    const nodes = parseNodes(
      `
<问 class="text-2xl" color="red"> Hello world </问>

note

<答> hi </答>
`
    )

    this.assertEquals(nodes, [
      "\n",
      {
        tag: "问",
        attributes: { class: "text-2xl", color: "red" },
        children: [" Hello world "],
      },
      "\n\nnote\n\n",
      { tag: "答", attributes: {}, children: [" hi "] },
      "\n",
    ])
  }

  "test error on disallowed character in tag name"() {
    this.assertError(() => {
      const nodes = parseNodes(`<q&a></q&a>`)
    })

    this.assertError(() => {
      const nodes = parseNodes(`<q+a></q+a>`)
    })
  }

  "test error on unbound namespace prefix"() {
    this.assertError(() => {
      const nodes = parseNodes(
        `
  <question theme:color="red">
    Q
  </question>
`
      )
    })
  }
}
