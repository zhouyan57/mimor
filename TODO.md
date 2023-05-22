# author

[author] `AuthorSelfLoading` -- sub page instead of whole page -- for more stable view

# cache

[cache] for home and author

- use indexeddb
- no abstraction, shameless green first

[cache] for `Mimor`

# author -- manual file sync

[author] `AuthorSelfHead`

# recall -- in many timelines

> Spaced repetition. A stream of contents, like tiktok, but the cards
> are collected by oneself. Solving the card backlog problem by do not
> care (tiktok does not have video backlog problem).

[recall] user can add a mimor into `/recall`

# caching

[author] `AuthorHead` -- for the sync button
[note] & [mimor] take optional `text`
[note] & [mimor] emit `load` -- for caching

[service-worker] be able to write service-worker in ts
[author] use indexeddb to cache data -- `utils/idb`

# dustbin

deleting a file will put it into `dustbin/`, with deleted time as prefix.

# mimor -- error handling

[mimor] `Mimor` -- `loadText` -- handle HTTP errors

# author -- error handling

[author] [refactor] `stateMakeMimorEntry*`
[author] `loadMimorEntries*` handle HTTP errors

# author editor -- templating

[author] `AuthorEditorToolbar` dispatch to `AuthorEditorToolbarNote` & `AuthorEditorToolbarMimor`
[author] `AuthorEditorToolbarMimor` template for editing
