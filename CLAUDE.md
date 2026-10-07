# ReceptionAide: public site repo

This is a PUBLIC repo: no credentials, tokens, prospect details, or client data get committed here, ever.

Code behind receptionaide.com: static HTML, one page per vertical, no build step. This file covers build and deploy only. Governance, positioning and writing rules live in `../CLAUDE.md` (the ReceptionAide folder), business facts in `../business/facts.md`. Sales, demo, and ops work happen from `../` and `../product/`, not here.

## Deploy
- Vercel project `receptionaide-site` (team densolv-s-projects), connected to GitHub `Densolve/receptionaide-site`. A push to `main` deploys to production.
- The prospect demo paths (/property, /medical, /hotel and their aliases) are redirects and rewrites in `vercel.json` to separate Vercel demo projects. `vercel.json` is the source of truth for the paths and their targets. How the demo projects themselves deploy is in `../product/integrations/vercel-deploys.md`; its path table is out of date, so trust `vercel.json`. Changing a demo does not need a redeploy here.
- Verify every deploy with a live fetch, because a clean push is not proof: `curl -s -L https://receptionaide.com/<page> | grep -c "<a string unique to the change>"`.

No credentials, tokens, prospect details, or client data in this repo.
