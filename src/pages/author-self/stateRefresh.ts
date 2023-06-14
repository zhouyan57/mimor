import { pathParse } from '../author/pathParse'
import { ConnectionActivityReport } from './Connection'
import { State } from './State'
import { entryReactive } from './entryReactive'
import { loadState } from './loadState'
import { stateCacheSet } from './stateCacheSet'

export async function stateRefresh(state: State): Promise<void> {
  state.isRefreshing = true

  const newState = await loadState(state)

  state.user = newState.user
  state.lastRefreshedAt = Date.now()
  stateSaveNewEntries(state, newState)
  stateMarkMissingEntries(state, newState)

  await stateCacheSet(state)

  state.isRefreshing = false
}

function stateSaveNewEntries(state: State, newState: State): void {
  const report: ConnectionActivityReport = {
    updatedFiles: [],
    createdFiles: [],
  }

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

      state.entries.push(entryReactive(newEntry, state))
    }
  }

  if (state.connection) {
    state.connection.activities.unshift({
      name: 'Refresh',
      time: Date.now(),
      report,
    })
  }
}

function stateMarkMissingEntries(state: State, newState: State): void {
  for (const entry of state.entries) {
    const found = newState.entries.find(
      (newEntry) => entry.path === newEntry.path,
    )
    if (!found) {
      entry.newText = entry.text
      entry.text = undefined
    }
  }
}
