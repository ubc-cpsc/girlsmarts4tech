# Starter Project: Pet

This README file explains the technologies used in this project.

## Server

In order to load the images and display them on a page in a browser locally, we need a web server to serve the images. Otherwise, the images won't be served.

To start a server easily, we use [php's built-in server](http://php.net/manual/en/features.commandline.webserver.php). Make sure you cd to the directory that contains `index.html`, then run:

```bash

$ php -S localhost:8888

```

and go to [localhost:8888](localhost:8888) to view the page.

## ESLint

ESLint can check code and issue warnings/errors for the parts that are error-prone. I've set up some linting rules that I see fit for the activity's purpose in [`.eslintrc`](./.eslintrc).


## Copyright

MIT License

Mandy Chen 2017
