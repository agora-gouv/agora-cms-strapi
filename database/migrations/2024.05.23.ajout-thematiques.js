module.exports = {
  async up() {
    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Travail',
          pictogramme: '💼',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Transition écologique',
          pictogramme: '🌱',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Santé',
          pictogramme: '🏥',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Economie',
          pictogramme: '📈',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Education & jeunesse',
          pictogramme: '🎓',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Europe & international',
          pictogramme: '🌏',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Transports',
          pictogramme: '🚊',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Sécurité & défense',
          pictogramme: '🛡',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Démocratie',
          pictogramme: '🗳',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Autre',
          pictogramme: '📦',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Agriculture & alimentation',
          pictogramme: '🌾',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Culture',
          pictogramme: '🎭',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Etudes sup. & recherche',
          pictogramme: '🧪',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Outre-mer'
          , pictogramme: '🌍',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Justice',
          pictogramme: '⚖️',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Solidarités',
          pictogramme: '🤝',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Autonomie',
          pictogramme: '👵',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Handicap',
          pictogramme: '♿️',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Sport',
          pictogramme: '🏀',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Services publics',
          pictogramme: '🏛',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Energie',
          pictogramme: '⚡️',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Egalité',
          pictogramme: '👥️',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Enfance',
          pictogramme: '👶',
          publishedAt: new Date(),
        },
      });
    });

    await strapi.db.transaction(async () => {
      await strapi.entityService.create('api::thematique.thematique', {
        data: {
          label: 'Logement',
          pictogramme: '🏡',
          publishedAt: new Date(),
        },
      });
    });
  },
};
