export class State {
  finished = false
  text = ''
  loading = true

  async load() {
    await this.loadText()
    this.loading = false
  }

  async loadText() {
    const response = await fetch('/contents/sisuo.mimor')
    const text = await response.text()
    this.text = text
  }
}
