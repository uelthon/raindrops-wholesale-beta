# Raindrops Wholesale Beta

## Start Project

- npm install
- config .env
  - VITE_BASE_URL = url base api
  - VITE_GOOGLE_MAP_API = key google maps api
  - VITE_STRIPE_KEY = public stripe key
- npm run dev

## Build

- npm run build
- copy files from dist to dashboard in the php project
- remove the first / in all src and href from the index.html of the built react app
- copy all assets from dashboard/assets to assets in the root except js and css files
- start php project  