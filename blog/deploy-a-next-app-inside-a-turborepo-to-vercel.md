
# Deploy a next app inside a turborepo to vercel

We have a turborepo with X apps that consume Y packages

## Create a new project in vercel
    
We have to create a new project for each app we want to deploy

We are going to import the same repo for each app, the monorepo

We will have as many projects as apps, all importing the monorepo

## Import monorepo and setup project 

The monorepo is built with turborepo and that is fine, but this vercel projects are made with other technology

We need to tell to vercel that for this project we want to run a nextjs app, we need to tell it the root of this app and what commands should it use to build

We choose Next.js as "Framework preset" and select the right root dirctory for our app

[@vercel - import turborepo app docs](https://vercel.com/docs/monorepos/turborepo#import-your-turborepo-to-vercel)


## Ignore builds for changes not related to this app

The monorepo is big and we will have a lot of files. Updating the diagrams folder should not trigger a deploy.

We can setup vercel to use turborepo to only deploy our app when there are changes to its code or its dependencies (we want to trigger a deploy when the ui package is updated)

Set Ignored Build Step to 'Only build Turborepo app if there are changes' (will run command npx turbo-ignore and will check for changes in the active project)

[@vercel - intelligen ignored builds using turborepo](https://vercel.com/changelog/intelligent-ignored-builds-using-turborepo)

## Setup Remote Caching for Turborepo on Vercel