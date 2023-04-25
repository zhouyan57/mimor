extract `loginByTokenIfNotAlready`

move login logic from `App` to `PageLayout`

- remove `auth.isLoadingUser`

`Recall` -- fix jump back
`Settings` -- fix jump back

# author

[author] `AuthorSelf` -- create mimor -- can be public or private
[author] `AuthorSelf` -- list author's `mimors` -- public and private
[author] `AuthorOther` -- list author's `mimors` -- public only
[author] `AuthorSelf` -- edit mimor
[author] `AuthorSelf` -- delete mimor

# settings

[settings] links to `settings/` from sidebar and menu
[settings] add settings to `removeServiceWorker`

# pwa

[pwa] add service-worker.js -- without cache

# home

[home] what to show in the home page?

# recall -- in many timelines

> Spaced repetition. A stream of contents, like tiktok, but the cards
> are collected by oneself. Solving the card backlog problem by do not
> care (tiktok does not have video backlog problem).

[recall] user can add a mimor into `/recall`
