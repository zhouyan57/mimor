import { MimorState } from "../MimorState"

export class BinaryLayoutState {
  revealed = false

  constructor(public mimor: MimorState) {}

  next() {
    this.revealed = false
    this.mimor.next()
  }

  get progress(): string {
    return `${this.mimor.pointer} / ${this.mimor.length}`
  }
}
