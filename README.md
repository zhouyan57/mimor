# Mimor

[ [WEBWITE](https://mimor.app)
| [MANUAL](https://readonly.link/manuals/https://mimor.app/contents/manual/en.json)
| [手册](https://readonly.link/manuals/https://mimor.app/contents/manual/zh.json) ]

Making memory a choice.

## Development

```sh
npm install     # Install dependencies
npm run dev     # Start the dev server
npm run check   # Type check
npm run format  # Format the code
```

We use [FiDB](https://github.com/fidb-official/fidb) for our backend API.

To start the HTTP API server using the example [`database`](database), run:

```sh
npm run api     # Start the backend server
```

Notes:

- To run the backend server, the [Node.js](https://nodejs.org) version should be `>= 20.1`.
- To work with the frontend dev server, the backend API port should be `5108` (the default port of FiDB).
- The example username are `xieyuheng` and `cicada-lang`.
- The example passwords are all `123456`.

## Contributions

To make a contribution, fork this project and create a pull request.

Please read the [STYLE-GUIDE.md](STYLE-GUIDE.md) before you change the code.

Remember to add yourself to [AUTHORS](AUTHORS).
Your line belongs to you, you can write a little
introduction to yourself but not too long.

It is assumed that all non draft PRs are ready to be merged.
If your PR is not ready to be merged yet, please make it a draft PR:

- [Creating draft PR](https://github.blog/2019-02-14-introducing-draft-pull-requests)
- [Changing a PR to draft](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)

During the development of your PR, you can make use of
the [TODO.md](TODO.md) file to record ideas temporarily,
and this file should be clean again at the end of your development.

## License

[GPLv3](LICENSE)
