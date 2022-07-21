import { parseNodes } from "./parse"

{
  const nodes = parseNodes(
    `
<question class="text-2xl" color="red"> Hello world </question>

note

<answer> hi </answer>
`
  )

  console.log(nodes)
}
