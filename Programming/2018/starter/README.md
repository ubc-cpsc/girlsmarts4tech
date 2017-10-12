# Starter Project: Pet

This README file explains the technologies used in this project.

## Dependencies

Make sure you're at this current folder, then run

```bash
$ npm install
```

to install all the dependencies.

## Server

In order to load the images and display them on a page in a browser locally, we need a web server to serve the images. Otherwise, the images won't be served.

To start a server easily, we use [http-server package](https://www.npmjs.com/package/http-server). Make sure you cd to the directory that contains `index.html` (which is either the completed folder or the starter folder), then run:

```bash
$ npm run mac
```

if on mac,

```bash
$ npm run win
```

if on windows, and go to [localhost:8888](localhost:8888) to view the page.

## ESLint

ESLint can check code and issue warnings/errors for the parts that are error-prone. I've set up some linting rules that I see fit for the activity's purpose in [`.eslintrc`](./.eslintrc).

## Develoment Environment

[Atom](https://atom.io/), an open source text editor will be used. The plug-ins use are:

- [atom-ternjs](https://atom.io/packages/atom-ternjs) for JavaScript auto code completion support,
- [linter-eslint](https://atom.io/packages/linter-eslint) to run and display ESLint results.


## Copyright

MIT License

Mandy Chen 2017
