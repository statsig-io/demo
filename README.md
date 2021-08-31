# Try out Statsig!

This repo is intended to make it easy for you to demo some Statsig features in your own setup, without having the write too much code - just follow the steps below.

## Steps
Note: this assumes you have npm installed in your dev environment. If you don't have that setup, [here are some instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. If you don't already have a Statsig account, create one for free at https://www.statsig.com/
2. Log in to your Statsig account and create a new Feature Gate named "First App Test"
3. Clone this repo so you can run things locally.
4. Run `setup.sh` from within the repo - this will install some dependencies, and create some necessary directories.
5. Open up `index.js` and replace X with your own secret key.
6. Run `run.sh` and see the output of your new Feature Gate! Since nothing was setup, it will output false all the time since that is the default.
7. Go back to your Statsig account where you created the Feature Gate, and add some rules.
8. Re-run `run.sh` and see how the output from the Node app changes.

## What's happening
For more details on what's going on here, check out our [blog post on this demo](https://blog.statsig.com/demo-a-simple-node-js-app-with-feature-flags-88b05eda7447).
