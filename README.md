# LWC Movie Database Client

You can view this deployed at [https://lwc-movie-database.vercel.app](https://lwc-movie-database.vercel.app).

Inspired by the Coding Train. Taking [his vanilla version](https://github.com/CodingGarden/intro-to-state) and using [LWC Open Source](https://lwc.dev) to replicate it.

All movie info sourced from [The Movie Database](https://www.themoviedb.org).

## Project Setup

From lwc.dev, I used

```bash
$ npm init lwr
$ npm install
```

I then added the [code related to using Rollup](https://lwc.dev/guide/install).

```bash
$ npm install --save-dev lwc rollup @lwc/rollup-plugin @rollup/plugin-replace
```

Make sure to also add the rollup.config.js, lwc.config.json and src/main.js file.

After the rollup build, I included the main.js from the dist folder into the index.html page I manually created in that folder.

## Deploy

This project is setup to be deployed to vercel. It uses a serverless function in the /api directory. [Check the vercel docs for more info](https://vercel.com/docs/concepts/functions/serverless-functions).

You will also need an api key from The Movie Database. Move the sample.env file to .env and add your key there.
