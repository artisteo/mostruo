# XX_PROJECT_PLACEHOLDER_XX

XX_PROJECT_PLACEHOLDER_XX is a organization that helps companies improve the relationship with their employees

# Mostruo

Is a [monorepo](https://monorepo.tools/) hosted in [Github](https://github.com/artisteo/mostruo) powered by [Turborepo](https://turbo.build/) technology that holds multiple apps and packages in a single codebase

This is an opensource project and the code is under the [WTFPL](https://spdx.org/licenses/WTFPL.html) license

# Mostruo apps: XX_APP_PLACEHOLDER_XX

Single point of user interaction

Can be accesed from any web browser with javascript support

> In order to provide service to any person regarding of their situation, we should be able to work withouth javascript. This is really challenguing and we are not going to do this

### TODO

- Monitoring

  - Frontend
  - Backend
  - Database

- Offline support

  - Read
  - Write

- Multidevice Support

  - Phone
  - Tablet
  - Laptop
  - Desktop
  - TV

- Accessibility Support

  - Visual support
  - Audio support

- Internationalization

  - Multiple countries
  - Multiple currencies
  - Multiple languages

- Multitenant

  - Multiple companies
  - Styles per company
  - Config per company

- Multienviroment

  - Production where real things happen
  - Staging for identical to production testing
  - Development for local development

  - Installable as desktop app

## XX_APP_PLACEHOLDER_XX: Frontend

- Progressive web app built with [NextJS] using the App Router
- Code is in `XX_APP_PLACEHOLDER_XX` folder
- Deployed to [Vercel CDN] in their hobby plan
- Interacts with **XX_APP_PLACEHOLDER_XX backend** for build and runtime requests
- Consumes `eslint-custom-config` and `tsconfig` packages to enforce **team conventions**
- Consumes `core` package for **unified bussiness logic** (validations, constants...)
- Consumes `ui` package for **unified ui/ux**

### TODO

- **Setup auth** with Clerk and backend
- **Setup anonymous auth** with Clerck and backend
- **Setup design system**
- **Setup monitoring** (logs, errors, analytics, custom events...)

## XX_APP_PLACEHOLDER_XX: Backend

- Serverless backend system built with [NextJS] using the App Router
  - API
    - Controllers run core use cases on [Vercel Serveless Functions](https://vercel.com/docs/functions/serverless-functions)
- Code is in `XX_APP_PLACEHOLDER_XX` folder
- Deployed to [Vercel Edge Network](https://vercel.com/docs/edge-network/overview) in their hobby plan
- Consumes `eslint-custom-config` and `tsconfig` packages to enforce **team conventions**
- Consumes `core` package for **unified bussiness logic** (validations, constants...)
- Infraestructure like databases is handled by core package.

### TODO

- **Setup auth** with Clerk and Frontend
- **Setup anonymous auth** with Clerck and Frontend
- **Setup monitoring** (logs, errors, analytics, custom events...)

# Mostruo CI / CD

All CI / CD operations are handled by [Managed Next.js with Vercel](https://nextjs.org/docs/pages/building-your-application/deploying#managed-nextjs-with-vercel)

## Scalability and operational costs

#### How much can we grow (how much traffic can we take) in the hobby plan?

### Frontend hosting

#### How much can we grow (how much traffic can we take) in the hobby plan?

> TODO we have to update this after we have some traffic to see if is accurate or we missed something

**Limit is 100 GB Bandwidth per month**

Super optimistic scenario:

- 2000 tenants
- 20 users per tenant
  - 40000 monthy users
  - 10 monthly sessions per user
    - 400000 sessions per month

Each user will do 10 sesions each month, and each sessión will consume 1MB of bandwith.
In this scenario **we would consume 400000MB of bandwith**, having still **600000MB free** in the hobby plan
**2000 tenants and 40000 users** is a pretty big traffic for a free hosting

### Serverless backend

> **TODO** Add info and simulations about vercel serverless functions free tier limits

### CI / CD

> **TODO** Add info and simulations about vercel ci/cd free tier limits
