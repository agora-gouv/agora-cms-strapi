# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
docker compose up -d
yarn develop
```

FAQ

- Pourquoi utiliser Postgres plutôt que sqlite en local ?
  - pour avoir un environnement qui se rapproche le plus de la dev et de la prod

Bon à savoir : 

- Postgres ne gère pas les noms de table à ralonge donc nous sommes limités dans notre nommage de tables ou de colonnes à 63 caractères sur Strapi
