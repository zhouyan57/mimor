export class ExploreState {
  finished = false
  flag = true
  text = ""
  loading = true

  again() {
    this.finished = false
    this.flag = !this.flag
  }

  async load() {
    await this.loadText()
    this.loading = false
  }

  async loadText() {
    const response = await fetch("/contents/sisuo.mimor")
    const text = await response.text()
    this.text = text
  }
}
