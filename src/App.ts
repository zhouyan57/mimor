export class App {
  //
}

declare global {
  var app: App
}

globalThis.app = new App()
