import { Program } from "./Program"

export abstract class Stmt {
  abstract execute(program: Program): void
}
