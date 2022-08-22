type TimerId = ReturnType<typeof setInterval>

export function poll<A>(options: {
  target: () => Promise<A>
  check: (data: A) => Promise<boolean>
  then: (data: A) => Promise<void>
  interval: number
}): { stop: () => void } {
  const { target, check, then, interval } = options

  let polling: TimerId | null = null

  const stop = () => polling && clearInterval(polling)

  polling = setInterval(async () => {
    const data = await target()
    if (await check(data)) {
      await then(data)
      stop()
    }
  }, interval)

  return { stop }
}
