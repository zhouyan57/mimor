# recall

[recall] `RecallAddMimor` -- `State`
[recall] `RecallAddMimor` -- convert url to SHA256 as key, save `{ src }`

- note that file name length limit is 255 bytes

[recall] show recalled mimors
[recall] show recalled mimors as a stream of contents -- pagination
[recall] spaced repetition -- rank the mimors based on user's history activities
[recall] calendar graph -- simple layout (no fixed)
[recall] [maybe] an action to add all user's own mimors (with special label to distinguish others' mimors)
[recall] support search
[recall] [maybe] can add new keywords to a mimor -- to recall different type of things

[recall] `<back-cover>` know about already added to `/recall`

# later

show that are not from refreshed

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
