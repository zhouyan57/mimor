`components/popover` -- or another name

- learn from alpinejs

- replace `patterns-of-web-user-interface`

  - maybe do a project called `x-ui`

`components/listbox` -- or another name

quit using headlessui

[author] `AuthorSelfHead` -- hover the connection info to show details and help graph

- use our own UI components

[author] `AuthorSelfHead` -- connection upload -- support override mode

# recall -- in many timelines

> Spaced repetition. A stream of contents, like tiktok, but the cards
> are collected by oneself. Solving the card backlog problem by do not
> care (tiktok does not have video backlog problem).

[recall] user can add a mimor into `/recall`

# home

[home] use the maze metaphor as intro
[home] show magazine -- introduce selected users and mimors
[home] show followed users activities

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
