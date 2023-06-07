import { ConnectionActivityReport } from './Connection'
import { State } from './State'
import { loadState } from './loadState'
import { pathParse } from './pathParse'
import { stateCacheSet } from './stateCacheSet'

export async function stateRefresh(state: State): Promise<void> {
  state.isRefreshing = true

  const report: ConnectionActivityReport = {
    updatedFiles: [],
    createdFiles: [],
  }

  const newState = await loadState(state)

  state.user = newState.user

  for (const newEntry of newState.entries) {
    const found = state.entries.find((entry) => entry.path === newEntry.path)
    if (found) {
      if (found.text !== newEntry.text) {
        report.updatedFiles.unshift(pathParse(newEntry.path).file)
      }

      found.text = newEntry.text
      found.createdAt = newEntry.createdAt
      found.updatedAt = newEntry.updatedAt
    } else {
      report.createdFiles.unshift(pathParse(newEntry.path).file)

      state.entries.push(newEntry)
    }
  }

  if (state.connection) {
    state.connection.activities.unshift({
      name: 'Refresh',
      time: Date.now(),
      report,
    })
  }

  await stateCacheSet(state)

  state.isRefreshing = false
}
