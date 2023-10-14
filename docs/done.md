- Only build on app or app dependencies changes
- Lint code pre commit
- Lint commit mssgs pre commit
- Enviroments
  - Enviroment variables are together in code in .env.local
    - local -> run locally pnpm dev / next dev
  - Enviroment variables are setup 1 by 1 in vercel, at team level, and then shared with the apps
    - development -> dont know where or when it is used
    - preview -> build non main branches
    - production -> build main branch