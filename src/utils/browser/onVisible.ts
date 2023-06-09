// https://stackoverflow.com/a/66394121

export function onVisible(
  element: HTMLElement,
  callback: (element: HTMLElement) => void,
) {
  new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        callback(element)
        observer.disconnect()
      }
    })
  }).observe(element)
}
