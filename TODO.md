# note

[author] use one `contents/` directory instead of `mimors/` vs `notes/`

[author] fix `pathFormat` and `pathParse`

[author] extract `AuthorOtherEntryHead` and `AuthorOtherEntryBody`
[author] extract `AuthorSelfEntryHead` and `AuthorSelfEntryBody`

[author] `AuthorSelfEntryBody` dispatch to `AuthorSelfEntryMimor` and `AuthorSelfEntryMarkdown`
[author] `AuthorSelfEntryMarkdown` -- show markdown file as plaintext
[author] `AuthorSelfEntryMarkdown` -- link to readonly.link

[author] `AuthorOtherEntryBody` dispatch to `AuthorOtherEntryMimor` and `AuthorOtherEntryMarkdown`
[author] `AuthorOtherEntryMarkdown` -- show markdown file as plaintext
[author] `AuthorOtherEntryMarkdown` -- link to readonly.link

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
