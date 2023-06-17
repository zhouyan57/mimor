# recall -- spaced repetition, a stream of contents

[recall] user can add other mimor into `/recall`
[recall] an action to add all user's own mimors (with special label to distinguish others' mimors)
[recall] support search
[recall] calendar graph -- simple layout (no fixed)
[recall] `searchState` should also be cached -- because the targets might be too many

# home

[home] use the maze metaphor as intro
[home] show magazine -- introduce selected users and mimors
[home] show followed users activities

# performance

[author-self] & [author-other] refresh should only ask for the new contents, not all contents

- we can do this by sending content hash (need backend support)

# dustbin

[author-self] deleting a file will put it into `dustbin/`, with deleted time as prefix.

# mimor -- error handling

[mimor] `Mimor` -- `loadText` -- handle HTTP errors

# author -- error handling

[author] [refactor] `stateMakeMimorEntry*`
[author] `loadMimorEntries*` handle HTTP errors

# bug

[author-self] & [author-other] fix contents jump -- `scrollIntoView` should not use `wait`

- `AuthorSelfEntry` and `AuthorOtherEntry`
