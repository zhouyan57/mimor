[user] extract `userAvatarURL`

[author] `AuthorOtherHead` -- show avatar

# note -- need upstream

[note] `NoteHead` link to readonly.link article -- url encoding for private contents

# recall -- in many timelines

> Spaced repetition. A stream of contents, like tiktok, but the cards
> are collected by oneself. Solving the card backlog problem by do not
> care (tiktok does not have video backlog problem).

[recall] user can add a mimor into `/recall`

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
