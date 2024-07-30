### 🚀 Lancer l'application

```
docker compose up -d
yarn develop
```

Ensuite, lancer toutes les migrations sql dans database/migrations-sql à la main
```
docker exec -it agora-cms-strapi-postgres-strapi-1 psql postgresql://strapi_user:strapi_password@localhos
t:5432/strapi_db
# lancer les fichiers *.sql
```

### FAQ

- Pourquoi utiliser Postgres plutôt que sqlite en local ?
  - pour avoir un environnement qui se rapproche le plus de la dev et de la prod

### Bon à savoir : 

- Postgres ne gère pas les noms de table à ralonge donc nous sommes limités dans notre nommage de tables ou de colonnes à 63 caractères sur Strapi
- pour changer le type d'un champs, il vaut mieux changer le nom pour ne pas créer d'incohérence en base (du texte pas formaté dans un richtext par exemple) et empêcher le serveur de démarrer en dev/local
