# recall

[recall] `RecallLoaded` vs `RecallLoading`

[recall] `RecallLoaded` -- layout -- with `RecallEntry`

[recall] `RecallEntry` -- show recalled mimor

[recall] `RecallCalendar` -- simple layout (no fixed)

[recall] `RecallHead` -- support search

[recall] spaced repetition -- rank the mimors based on user's history activities

[recall] [maybe] an action to add all user's own mimors (with special label to distinguish others' mimors)

[recall] [maybe] can add additional keywords to a saved mimor -- to recall different type of things

[recall] `<back-cover>` know about already added to `/recall`

[recall] publish new for npm package -- for "add to recall"

[recall] `RecallAddMimorLoaded` -- if already added, show button to jump to `/recall` and the mimor

[recall] show recalled mimors as a stream of contents -- pagination

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
