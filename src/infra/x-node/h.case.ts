import { TestCase } from "@xieyuheng/test-case"
import { h } from "./h"

export default class extends TestCase {
  "test h"() {
    this.assertEquals(h("question", { color: "red" }, ["Why?"]), {
      tag: "question",
      attributes: { color: "red" },
      children: ["Why?"],
    })

    this.assertEquals(h("question", ["Why?"]), {
      tag: "question",
      attributes: {},
      children: ["Why?"],
    })

    this.assertEquals(h("question", { color: "red" }), {
      tag: "question",
      attributes: { color: "red" },
      children: [],
    })

    this.assertEquals(h("question", { color: "red" }, "Why?"), {
      tag: "question",
      attributes: { color: "red" },
      children: ["Why?"],
    })
  }
}
