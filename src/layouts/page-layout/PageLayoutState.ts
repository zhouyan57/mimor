export class PageLayoutState {
  loading = true

  get appName(): string {
    return app.lang.zh ? "谜墨" : "Mimor"
  }
}
