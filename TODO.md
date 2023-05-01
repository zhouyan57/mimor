# note

[author] extract `AuthorSelfEntryContent`

[author] extract `AuthorOtherEntryHead`
[author] extract `AuthorOtherEntryContent`

[author] `AuthorSelfEntryContent` dispatch to `AuthorSelfEntryMimor` and `AuthorSelfEntryMarkdown`
[author] `AuthorSelfEntryMarkdown` -- show markdown file as plaintext
[author] `AuthorSelfEntryMarkdown` -- link to readonly.link

[author] `AuthorOtherEntryContent` dispatch to `AuthorOtherEntryMimor` and `AuthorOtherEntryMarkdown`
[author] `AuthorOtherEntryMarkdown` -- show markdown file as plaintext
[author] `AuthorOtherEntryMarkdown` -- link to readonly.link

[author] extract `editorTextareaPlaceholder`
[author] extract `AuthorEditorToolbar`
[author] `AuthorEditorToolbar` dispatch to `AuthorEditorToolbarMarkdown` & `AuthorEditorToolbarMimor`

# author

[author] `AuthorSelf` -- edit mimor
[author] `AuthorSelf` -- delete mimor

# author avatar

[settings] user has avatar
[settings] be able to upload author avatar
[settings] show author avatar

[author] `AuthorOtherHead` -- show avatar

# mimor -- errors handling

[mimor] `Mimor` -- `loadText` -- handle HTTP errors

# author -- error handling

[author] [refactor] `stateMakeMimorEntry*`
[author] `loadMimorEntries*` handle HTTP errors

# recall -- in many timelines

> Spaced repetition. A stream of contents, like tiktok, but the cards
> are collected by oneself. Solving the card backlog problem by do not
> care (tiktok does not have video backlog problem).

[recall] user can add a mimor into `/recall`
