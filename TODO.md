[search] `stateSearch` should not do side effect -- to be reused with ad hoc keywords

[search] disable a keyword when it will make no results
[search] preview a keyword's number of results

[author-self] & [author-other] add a statistics button to head

- to show last refresh time
- show list of contents
- contents with byte count and line count
- contents can jump to the content

# recall -- spaced repetition, a stream of contents

[recall] user can add other mimor into `/recall`
[recall] an action to add all user's own mimors (with special label to distinguish others' mimors)
[recall] support search

recall 页面假设了用户只对得分最高的几个 mimor 感兴趣，所以即便在顶部加上了日历图等统计信息，也不需要使用 fixed layout，和 search 页面类似就行。

搜索 state 也应该被 cache，因为对于 recall 来说 targets 可能很多。

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
