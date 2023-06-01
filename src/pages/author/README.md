# The data loading process

- Found cache from IDB?

  - [true] Load the cached and load again from backend (the refresh).
  - [false] Load from backend.

- This page does NOT load contents,
  contents are loaded by each content component.

  Thus, contents are not cached.

- Each content component should load content.

  When using a component we can listen to `loaded` event
  and save the content into the state.

  Note that, this might happen before or after the refresh,
  when implementing refresh, we must take this into account.
