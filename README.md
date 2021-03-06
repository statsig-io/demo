# Try out Statsig!

This repo is intended to make it easy for you to demo some Statsig features in your own setup, without having the write any code - just follow the steps below.

## Steps
Note: this assumes you have npm installed in your dev environment. If you don't have that setup, [here are some instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. If you don't already have a Statsig account, create one for free at https://www.statsig.com/
2. Log in to your Statsig account and create a new Feature Gate named "First App Test"
3. Clone this repo so you can run things locally.
4. Run `setup.sh` from within the repo - this will install some dependencies, and create some necessary directories.
5. Open up `index.js` and replace `'secret-API-KEY'` with your own secret key (you can find this in your Project Settings -> API Keys).
6. Run `run.sh` and see the output of your new Feature Gate! Since nothing was setup, it will output false all the time since that is the default.
7. Go back to your Statsig account where you created the Feature Gate, and add some rules so that it doesn't always fail (see below for ideas).
8. Re-run `run.sh` and see how the output from the Node app changes. You can also just leave it running and see how the output changes in real-time as you change the rules backing your Feature Gate.

## Rule ideas to try out
1. Setup a rule based on user ID, and then see what happens when you change the user ID that gets passed into the Statsig API (default in `statsigNodeApp/index.js` is user ID = 1).
2. Setup a rule that passes everyone.
3. Setup a rule based on time of day.

## Why am I not seeing checks in the Diagnostics tab?
The Statsig server SDK batches up to 500 events, or waits for 1 minute before flushing logs to the server.  If you want to see your checks showing live in the Statsig console, leave the programming running for over a minute, and wait a bit longer on the Diagnostics tab of the gate.

## What's happening
For more details on what's going on here, check out our [blog post on this demo](https://blog.statsig.com/demo-a-simple-node-js-app-with-feature-flags-88b05eda7447).
