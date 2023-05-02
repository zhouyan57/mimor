[mimor] `MimorEditor` -- exit restore `originalText`
[author] `AuthorSelf` -- delete mimor
[note] `NoteHead` link to readonly.link article -- url encoding for private contents

# author avatar

[settings] user has avatar
[settings] be able to upload author avatar
[settings] show author avatar

[author] `AuthorOtherHead` -- show avatar

# author

[author] `AuthorEditorToolbar` dispatch to `AuthorEditorToolbarNote` & `AuthorEditorToolbarMimor`
[author] `AuthorEditorToolbarMimor` template for editing

# recall -- in many timelines

> Spaced repetition. A stream of contents, like tiktok, but the cards
> are collected by oneself. Solving the card backlog problem by do not
> care (tiktok does not have video backlog problem).

[recall] user can add a mimor into `/recall`

# mimor -- errors handling

[mimor] `Mimor` -- `loadText` -- handle HTTP errors

# author -- error handling

[author] [refactor] `stateMakeMimorEntry*`
[author] `loadMimorEntries*` handle HTTP errors
