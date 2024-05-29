Les migrations Strapi ne fonctionnent pas comme on voudrait pour le moment : elles se lancent avant les changements de structure de tables.
Par exemple, si je créé une table "Thématique" et que je fais un script pour la peupler, Strapi n'arrivera pas à démarrer car il essaiera de créer les données avant de créer la table.

La solution que nous avons choisi est de stocker des fichiers de migrations en SQL que nous lançons à la main.
