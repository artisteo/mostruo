
# Deploy a next app inside a turborepo to vercel

## Create a new project in vercel
    
We have to create **a new project for each app** we want to deploy

We are going to **import the same repo for each app**, the monorepo

We will have **as many projects as apps**, all importing the monorepo

## Import monorepo and setup project 

The monorepo is built with turborepo and that is fine, but **our app is built with next**

**We need to tell vercel** that for this project we want to run a next app, the root of this app and the commands it should use for building

We choose next as "Framework preset" and select the right root dir for our app

[@vercel - Import your Turborepo to Vercel](https://vercel.com/docs/monorepos/turborepo#import-your-turborepo-to-vercel)


## Ignore builds for changes not related to this app

The monorepo is big and we will have a lot of files. Updating the diagrams folder should not trigger a deploy.

We can setup vercel to use turborepo to** only deploy our app when there are changes to its code or its dependencies** (we want to trigger a deploy when the ui package is updated)

Set Ignored Build Step to 'Only build Turborepo app if there are changes' (will run command npx turbo-ignore and will check for changes in the active project)

[@vercel - Intelligent ignored builds using Turborepo](https://vercel.com/changelog/intelligent-ignored-builds-using-turborepo)

## Setup Remote Caching for Turborepo on Vercel

Remote caching means less biulds, using **vercel remote cache will make our builds faster**

[@vercel - Setup Remote Caching for Turborepo on Vercel](https://vercel.com/docs/monorepos/turborepo#setup-remote-caching-for-turborepo-on-vercel)
