import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCharteParticipationCharteParticipation
  extends Schema.CollectionType {
  collectionName: 'charte_participations';
  info: {
    singularName: 'charte-participation';
    pluralName: 'charte-participations';
    displayName: 'Charte participation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    charte: Attribute.Blocks & Attribute.Required;
    datetime_debut: Attribute.DateTime & Attribute.Required;
    charte_preview: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::charte-participation.charte-participation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::charte-participation.charte-participation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConcertationConcertation extends Schema.CollectionType {
  collectionName: 'concertations';
  info: {
    singularName: 'concertation';
    pluralName: 'concertations';
    displayName: 'Concertation';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    image_url: Attribute.String & Attribute.Required;
    datetime_publication: Attribute.DateTime & Attribute.Required;
    thematique: Attribute.Relation<
      'api::concertation.concertation',
      'oneToOne',
      'api::thematique.thematique'
    >;
    flamme_label: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::concertation.concertation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::concertation.concertation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationConsultation extends Schema.CollectionType {
  collectionName: 'consultations';
  info: {
    singularName: 'consultation';
    pluralName: 'consultations';
    displayName: '1 Consultation - Squelette';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    thematique: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'api::thematique.thematique'
    >;
    url_image_de_couverture: Attribute.String & Attribute.Required;
    url_image_page_de_contenu: Attribute.String & Attribute.Required;
    nombre_de_questions: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    estimation_nombre_de_questions: Attribute.String & Attribute.Required;
    estimation_temps: Attribute.String & Attribute.Required;
    nombre_participants_cible: Attribute.Integer & Attribute.Required;
    questions: Attribute.DynamicZone<
      [
        'question-de-consultation.description',
        'question-de-consultation.question-a-choix-multiples',
        'question-de-consultation.question-a-choix-unique',
        'question-de-consultation.question-conditionnelle',
        'question-de-consultation.question-ouverte'
      ]
    > &
      Attribute.Required;
    consultation_avant_reponse: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'api::consultation-avant-reponse.consultation-avant-reponse'
    >;
    consultation_apres_reponse_ou_terminee: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'api::consultation-apres-reponse-ou-terminee.consultation-apres-reponse-ou-terminee'
    >;
    consultation_contenu_autres: Attribute.Relation<
      'api::consultation.consultation',
      'oneToMany',
      'api::consultation-contenu-autre.consultation-contenu-autre'
    >;
    consultation_contenu_a_venir: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'api::consultation-contenu-a-venir.consultation-contenu-a-venir'
    >;
    datetime_de_debut: Attribute.DateTime & Attribute.Required;
    datetime_de_fin: Attribute.DateTime & Attribute.Required;
    titre_consultation: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    consultation_contenu_analyse_des_reponse: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'api::consultation-contenu-analyse-des-reponse.consultation-contenu-analyse-des-reponse'
    >;
    contenu_reponse_du_commanditaires: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'api::consultation-contenu-reponse-du-commanditaire.consultation-contenu-reponse-du-commanditaire'
    >;
    territoire: Attribute.Enumeration<
      [
        'National',
        "Fran\u00E7ais de l'\u00E9tranger",
        'Ain',
        'Aisne',
        'Allier',
        'Alpes-de-Haute-Provence',
        'Alpes-Maritimes',
        'Ardennes',
        'Ard\u00E8che',
        'Ari\u00E8ge',
        'Aube',
        'Aude',
        'Auvergne-Rh\u00F4ne-Alpes',
        'Aveyron',
        'Bas-Rhin',
        'Bouches-du-Rh\u00F4ne',
        'Bourgogne-Franche-Comt\u00E9',
        'Bretagne',
        'Calvados',
        'Cantal',
        'Centre-Val de Loire',
        'Charente',
        'Charente-Maritime',
        'Cher',
        'Corr\u00E8ze',
        'Corse',
        'Corse-du-Sud',
        'Creuse',
        'C\u00F4te-d\u2019Or',
        'C\u00F4tes-d\u2019Armor',
        'Deux-S\u00E8vres',
        'Dordogne',
        'Doubs',
        'Dr\u00F4me',
        'Essonne',
        'Eure',
        'Eure-et-Loir',
        'Finist\u00E8re',
        'Gard',
        'Gers',
        'Gironde',
        'Grand Est',
        'Guadeloupe',
        'Guyane',
        'Haut-Rhin',
        'Haute-Corse',
        'Haute-Garonne',
        'Haute-Loire',
        'Haute-Marne',
        'Haute-Savoie',
        'Haute-Sa\u00F4ne',
        'Haute-Vienne',
        'Hautes-Alpes',
        'Hautes-Pyr\u00E9n\u00E9es',
        'Hauts-de-France',
        'Hauts-de-Seine',
        'H\u00E9rault',
        'Ile-de-France',
        'Ille-et-Vilaine',
        'Indre',
        'Indre-et-Loire',
        'Is\u00E8re',
        'Jura',
        'La R\u00E9union',
        'Landes',
        'Loir-et-Cher',
        'Loire',
        'Loire-Atlantique',
        'Loiret',
        'Lot',
        'Lot-et-Garonne',
        'Loz\u00E8re',
        'Maine-et-Loire',
        'Manche',
        'Marne',
        'Martinique',
        'Mayenne',
        'Mayotte',
        'Meurthe-et-Moselle',
        'Meuse',
        'Morbihan',
        'Moselle',
        'Ni\u00E8vre',
        'Nord',
        'Normandie',
        'Nouvelle-Aquitaine',
        'Nouvelle-Cal\u00E9donie',
        'Occitanie',
        'Oise',
        'Orne',
        'Outre-mer',
        'Paris',
        'Pas-de-Calais',
        'Pays de la Loire',
        'Polyn\u00E9sie fran\u00E7aise',
        'Provence Alpes C\u00F4te d\u2019Azur',
        'Puy-de-D\u00F4me',
        'Pyr\u00E9n\u00E9es-Atlantiques',
        'Pyr\u00E9n\u00E9es-Orientales',
        'Rh\u00F4ne',
        'Saint-Barth\u00E9l\u00E9my',
        'Saint-Martin',
        'Saint-Pierre-et-Miquelon',
        'Sarthe',
        'Savoie',
        'Sa\u00F4ne-et-Loire',
        'Seine-et-Marne',
        'Seine-Maritime',
        'Seine-Saint-Denis',
        'Somme',
        'Tarn',
        'Tarn-et-Garonne',
        'Terres australes et antarctiques fran\u00E7aises',
        'Territoire de Belfort',
        'Val-de-Marne',
        'Val-d\u2019Oise',
        'Var',
        'Vaucluse',
        'Vend\u00E9e',
        'Vienne',
        'Vosges',
        'Wallis-et-Futuna',
        'Yonne',
        'Yvelines'
      ]
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation.consultation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationApresReponseOuTermineeConsultationApresReponseOuTerminee
  extends Schema.CollectionType {
  collectionName: 'consultation_apres_reponse_ou_terminees';
  info: {
    singularName: 'consultation-apres-reponse-ou-terminee';
    pluralName: 'consultation-apres-reponse-ou-terminees';
    displayName: '3 Consultation - Pour aller plus loin';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    template_partage: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Comme moi, tu peux participer \u00E0 la Consultation\u00A0: {title} {url}'>;
    historique_titre: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Fin de consultation'>;
    historique_call_to_action: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Consulter toutes les r\u00E9ponses'>;
    sections: Attribute.DynamicZone<
      [
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video',
        'consultation-section.section-accordeon'
      ]
    > &
      Attribute.Required;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'fin-de-la-consultation'>;
    feedback_message: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u00CAtes-vous satisfait(e) de cette consultation ?'>;
    nom_strapi: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation-apres-reponse-ou-terminee.consultation-apres-reponse-ou-terminee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation-apres-reponse-ou-terminee.consultation-apres-reponse-ou-terminee',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationAvantReponseConsultationAvantReponse
  extends Schema.CollectionType {
  collectionName: 'consultations_avant_reponse';
  info: {
    singularName: 'consultation-avant-reponse';
    pluralName: 'consultations-avant-reponse';
    displayName: '2 Consultation - Pr\u00E9sentation';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    template_partage: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Comme moi, tu peux participer \u00E0 la Consultation\u00A0: {title} {url}'>;
    historique_titre: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lancement'>;
    historique_call_to_action: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Voir les objectifs'>;
    sections: Attribute.DynamicZone<
      [
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video',
        'consultation-section.section-accordeon'
      ]
    > &
      Attribute.Required;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'lancement'>;
    commanditaire: Attribute.Blocks & Attribute.Required;
    objectif: Attribute.Blocks & Attribute.Required;
    axe_gouvernemental: Attribute.Blocks & Attribute.Required;
    nom_strapi: Attribute.String & Attribute.Required;
    presentation: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation-avant-reponse.consultation-avant-reponse',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation-avant-reponse.consultation-avant-reponse',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationContenuAVenirConsultationContenuAVenir
  extends Schema.CollectionType {
  collectionName: 'consultation_contenus_a_venir';
  info: {
    singularName: 'consultation-contenu-a-venir';
    pluralName: 'consultation-contenus-a-venir';
    displayName: '7 Consultation - \u00C0 venir';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    titre_historique: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation-contenu-a-venir.consultation-contenu-a-venir',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation-contenu-a-venir.consultation-contenu-a-venir',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationContenuAnalyseDesReponseConsultationContenuAnalyseDesReponse
  extends Schema.CollectionType {
  collectionName: 'consultation_contenu_analyse_des_reponses';
  info: {
    singularName: 'consultation-contenu-analyse-des-reponse';
    pluralName: 'consultation-contenu-analyse-des-reponses';
    displayName: '4 Consultation - Analyse des r\u00E9ponses';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    lien_telechargement_analyse: Attribute.String & Attribute.Required;
    template_partage: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Cela peut t\u2019int\u00E9resser : l\u2019analyse des r\u00E9ponses de la consultation {title} {url}'>;
    sections: Attribute.DynamicZone<
      [
        'consultation-section.section-accordeon',
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video'
      ]
    > &
      Attribute.Required;
    datetime_publication: Attribute.DateTime & Attribute.Required;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'analyse-disponible'>;
    feedback_message: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<"\u00CAtes-vous satisfait(e) de l'analyse de cette consultation ?">;
    nom_strapi: Attribute.String & Attribute.Required;
    historique_titre: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Analyse des r\u00E9ponses'>;
    historique_call_to_action: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Consulter la synth\u00E8se'>;
    flamme_label: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 26;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation-contenu-analyse-des-reponse.consultation-contenu-analyse-des-reponse',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation-contenu-analyse-des-reponse.consultation-contenu-analyse-des-reponse',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationContenuAutreConsultationContenuAutre
  extends Schema.CollectionType {
  collectionName: 'consultations_contenu_autre';
  info: {
    singularName: 'consultation-contenu-autre';
    pluralName: 'consultations-contenu-autre';
    displayName: '6 Consultation - Autre';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    template_partage: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Cela peut t\u2019int\u00E9resser : l\u2019analyse des r\u00E9ponses de la consultation {title} {url}'>;
    sections: Attribute.DynamicZone<
      [
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video',
        'consultation-section.section-accordeon'
      ]
    >;
    historique_titre: Attribute.String & Attribute.Required;
    historique_call_to_action: Attribute.String & Attribute.Required;
    datetime_publication: Attribute.DateTime & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
    feedback_message: Attribute.String &
      Attribute.DefaultTo<'\u00CAtes-vous satisfait(e) de cette consultation ?'>;
    nom_strapi: Attribute.String & Attribute.Required;
    flamme_label: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 26;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation-contenu-autre.consultation-contenu-autre',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation-contenu-autre.consultation-contenu-autre',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiConsultationContenuReponseDuCommanditaireConsultationContenuReponseDuCommanditaire
  extends Schema.CollectionType {
  collectionName: 'contenu_reponse_du_commanditaires';
  info: {
    singularName: 'consultation-contenu-reponse-du-commanditaire';
    pluralName: 'consultation-contenu-reponse-du-commanditaires';
    displayName: '5 Consultation - R\u00E9ponse du commanditaire';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    template_partage: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Cela peut t\u2019int\u00E9resser : la r\u00E9ponse du gouvernement sur la consultation {title} {url}'>;
    sections: Attribute.DynamicZone<
      [
        'consultation-section.section-accordeon',
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video'
      ]
    > &
      Attribute.Required;
    datetime_publication: Attribute.DateTime & Attribute.Required;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'reponse-du-gouvernement'>;
    feedback_message: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u00CAtes-vous satisfait(e) de la r\u00E9ponse de la ministre ?'>;
    nom_strapi: Attribute.String & Attribute.Required;
    historique_titre: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'R\u00E9ponse du Gouvernement'>;
    historique_call_to_action: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Actions mises en place'>;
    flamme_label: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 26;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::consultation-contenu-reponse-du-commanditaire.consultation-contenu-reponse-du-commanditaire',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::consultation-contenu-reponse-du-commanditaire.consultation-contenu-reponse-du-commanditaire',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePoserMaQuestionPagePoserMaQuestion
  extends Schema.SingleType {
  collectionName: 'page_poser_ma_questions';
  info: {
    singularName: 'page-poser-ma-question';
    pluralName: 'page-poser-ma-questions';
    displayName: 'Page poser ma question';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    texte_regles: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-poser-ma-question.page-poser-ma-question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-poser-ma-question.page-poser-ma-question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageQuestionsAuGouvernementPageQuestionsAuGouvernement
  extends Schema.SingleType {
  collectionName: 'page_questions_au_gouvernements';
  info: {
    singularName: 'page-questions-au-gouvernement';
    pluralName: 'page-questions-au-gouvernements';
    displayName: 'Page questions au gouvernement';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    information_bottomsheet: Attribute.Text & Attribute.Required;
    nombre_de_questions: Attribute.String & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-questions-au-gouvernement.page-questions-au-gouvernement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-questions-au-gouvernement.page-questions-au-gouvernement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPageReponseAuxQuestionsAuGouvernementPageReponseAuxQuestionsAuGouvernement
  extends Schema.SingleType {
  collectionName: 'page_reponse_aux_questions_au_gouvernements';
  info: {
    singularName: 'page-reponse-aux-questions-au-gouvernement';
    pluralName: 'page-reponse-aux-questions-au-gouvernements';
    displayName: 'Page r\u00E9ponse aux questions au gouvernement';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    information_reponse_a_venir_bottomsheet: Attribute.Text &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::page-reponse-aux-questions-au-gouvernement.page-reponse-aux-questions-au-gouvernement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::page-reponse-aux-questions-au-gouvernement.page-reponse-aux-questions-au-gouvernement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQaGHeadersOngletQaGHeadersOnglet
  extends Schema.CollectionType {
  collectionName: 'qa_g_headers_onglets';
  info: {
    singularName: 'qa-g-headers-onglet';
    pluralName: 'qa-g-headers-onglets';
    displayName: 'QaG - Headers onglet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    message: Attribute.Text & Attribute.Required;
    type: Attribute.Enumeration<['top', 'supporting', 'trending', 'latest']> &
      Attribute.Required;
    datetime_publication: Attribute.DateTime & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::qa-g-headers-onglet.qa-g-headers-onglet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::qa-g-headers-onglet.qa-g-headers-onglet',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReponseDuGouvernementReponseDuGouvernement
  extends Schema.CollectionType {
  collectionName: 'reponse_du_gouvernements';
  info: {
    singularName: 'reponse-du-gouvernement';
    pluralName: 'reponse-du-gouvernements';
    displayName: 'R\u00E9ponse du gouvernement';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    auteur: Attribute.String & Attribute.Required;
    auteurPortraitUrl: Attribute.String & Attribute.Required;
    reponseDate: Attribute.Date & Attribute.Required;
    questionId: Attribute.String & Attribute.Required;
    reponseType: Attribute.DynamicZone<
      ['reponse.reponse-video', 'reponse.reponsetextuelle']
    > &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 1;
        },
        number
      >;
    feedbackQuestion: Attribute.Text & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::reponse-du-gouvernement.reponse-du-gouvernement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::reponse-du-gouvernement.reponse-du-gouvernement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteVitrineAccueilSiteVitrineAccueil
  extends Schema.SingleType {
  collectionName: 'site_vitrine_accueils';
  info: {
    singularName: 'site-vitrine-accueil';
    pluralName: 'site-vitrine-accueils';
    displayName: 'Site vitrine - accueil';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    titre_header: Attribute.String & Attribute.Required;
    sous_titre_header: Attribute.String & Attribute.Required;
    titre_body: Attribute.String & Attribute.Required;
    description_body: Attribute.Text & Attribute.Required;
    texte_image_1: Attribute.Blocks & Attribute.Required;
    texte_image_2: Attribute.Blocks & Attribute.Required;
    texte_image_3: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-vitrine-accueil.site-vitrine-accueil',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-vitrine-accueil.site-vitrine-accueil',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteVitrineConditionsGeneralesDUtilisationSiteVitrineConditionsGeneralesDUtilisation
  extends Schema.SingleType {
  collectionName: 'site_vitrine_conditions_generales_d_utilisations';
  info: {
    singularName: 'site-vitrine-conditions-generales-d-utilisation';
    pluralName: 'site-vitrine-conditions-generales-d-utilisations';
    displayName: "Site vitrine - Conditions g\u00E9n\u00E9rales d'utilisation";
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    conditions_generales_d_utilisation: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-vitrine-conditions-generales-d-utilisation.site-vitrine-conditions-generales-d-utilisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-vitrine-conditions-generales-d-utilisation.site-vitrine-conditions-generales-d-utilisation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteVitrineConsultationSiteVitrineConsultation
  extends Schema.SingleType {
  collectionName: 'site_vitrine_consultations';
  info: {
    singularName: 'site-vitrine-consultation';
    pluralName: 'site-vitrine-consultations';
    displayName: 'Site vitrine - Consultation';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    donnez_votre_avis: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-vitrine-consultation.site-vitrine-consultation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-vitrine-consultation.site-vitrine-consultation',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteVitrineDeclarationDAccessibiliteSiteVitrineDeclarationDAccessibilite
  extends Schema.SingleType {
  collectionName: 'site_vitrine_declaration_d_accessibilites';
  info: {
    singularName: 'site-vitrine-declaration-d-accessibilite';
    pluralName: 'site-vitrine-declaration-d-accessibilites';
    displayName: "Site vitrine - D\u00E9claration d'accessibilit\u00E9";
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    declaration: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-vitrine-declaration-d-accessibilite.site-vitrine-declaration-d-accessibilite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-vitrine-declaration-d-accessibilite.site-vitrine-declaration-d-accessibilite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteVitrineMentionsLegaleSiteVitrineMentionsLegale
  extends Schema.SingleType {
  collectionName: 'site_vitrine_mentions_legales';
  info: {
    singularName: 'site-vitrine-mentions-legale';
    pluralName: 'site-vitrine-mentions-legales';
    displayName: 'Site vitrine - Mentions l\u00E9gales';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    mentions_legales: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-vitrine-mentions-legale.site-vitrine-mentions-legale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-vitrine-mentions-legale.site-vitrine-mentions-legale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteVitrinePolitiqueDeConfidentialiteSiteVitrinePolitiqueDeConfidentialite
  extends Schema.SingleType {
  collectionName: 'site_vitrine_politique_de_confidentialites';
  info: {
    singularName: 'site-vitrine-politique-de-confidentialite';
    pluralName: 'site-vitrine-politique-de-confidentialites';
    displayName: 'Site vitrine - Politique de confidentialit\u00E9';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    politique_de_confidentialite: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-vitrine-politique-de-confidentialite.site-vitrine-politique-de-confidentialite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-vitrine-politique-de-confidentialite.site-vitrine-politique-de-confidentialite',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSiteVitrineQuestionAuGouvernementSiteVitrineQuestionAuGouvernement
  extends Schema.SingleType {
  collectionName: 'site_vitrine_question_au_gouvernements';
  info: {
    singularName: 'site-vitrine-question-au-gouvernement';
    pluralName: 'site-vitrine-question-au-gouvernements';
    displayName: 'Site vitrine - Question au gouvernement';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    sous_titre: Attribute.String & Attribute.Required;
    texte_soutien: Attribute.Blocks & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::site-vitrine-question-au-gouvernement.site-vitrine-question-au-gouvernement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::site-vitrine-question-au-gouvernement.site-vitrine-question-au-gouvernement',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiThematiqueThematique extends Schema.CollectionType {
  collectionName: 'thematiques';
  info: {
    singularName: 'thematique';
    pluralName: 'thematiques';
    displayName: 'Th\u00E9matique';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    pictogramme: Attribute.String & Attribute.Required;
    id_base_de_donnees: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::thematique.thematique',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::thematique.thematique',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWelcomePageNewWelcomePageNew extends Schema.CollectionType {
  collectionName: 'welcome_page_news';
  info: {
    singularName: 'welcome-page-new';
    pluralName: 'welcome-page-news';
    displayName: 'Welcome page - News';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    message: Attribute.Blocks & Attribute.Required;
    call_to_action: Attribute.String & Attribute.Required;
    date_de_debut: Attribute.DateTime & Attribute.Required;
    page_route_argument_mobile: Attribute.String;
    page_route_mobile_enum: Attribute.Enumeration<
      [
        '/consultationsPage',
        '/qagsPage',
        '/consultation/dynamic',
        '/qagDetailsPage'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'/consultationsPage'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::welcome-page-new.welcome-page-new',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::welcome-page-new.welcome-page-new',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::charte-participation.charte-participation': ApiCharteParticipationCharteParticipation;
      'api::concertation.concertation': ApiConcertationConcertation;
      'api::consultation.consultation': ApiConsultationConsultation;
      'api::consultation-apres-reponse-ou-terminee.consultation-apres-reponse-ou-terminee': ApiConsultationApresReponseOuTermineeConsultationApresReponseOuTerminee;
      'api::consultation-avant-reponse.consultation-avant-reponse': ApiConsultationAvantReponseConsultationAvantReponse;
      'api::consultation-contenu-a-venir.consultation-contenu-a-venir': ApiConsultationContenuAVenirConsultationContenuAVenir;
      'api::consultation-contenu-analyse-des-reponse.consultation-contenu-analyse-des-reponse': ApiConsultationContenuAnalyseDesReponseConsultationContenuAnalyseDesReponse;
      'api::consultation-contenu-autre.consultation-contenu-autre': ApiConsultationContenuAutreConsultationContenuAutre;
      'api::consultation-contenu-reponse-du-commanditaire.consultation-contenu-reponse-du-commanditaire': ApiConsultationContenuReponseDuCommanditaireConsultationContenuReponseDuCommanditaire;
      'api::page-poser-ma-question.page-poser-ma-question': ApiPagePoserMaQuestionPagePoserMaQuestion;
      'api::page-questions-au-gouvernement.page-questions-au-gouvernement': ApiPageQuestionsAuGouvernementPageQuestionsAuGouvernement;
      'api::page-reponse-aux-questions-au-gouvernement.page-reponse-aux-questions-au-gouvernement': ApiPageReponseAuxQuestionsAuGouvernementPageReponseAuxQuestionsAuGouvernement;
      'api::qa-g-headers-onglet.qa-g-headers-onglet': ApiQaGHeadersOngletQaGHeadersOnglet;
      'api::reponse-du-gouvernement.reponse-du-gouvernement': ApiReponseDuGouvernementReponseDuGouvernement;
      'api::site-vitrine-accueil.site-vitrine-accueil': ApiSiteVitrineAccueilSiteVitrineAccueil;
      'api::site-vitrine-conditions-generales-d-utilisation.site-vitrine-conditions-generales-d-utilisation': ApiSiteVitrineConditionsGeneralesDUtilisationSiteVitrineConditionsGeneralesDUtilisation;
      'api::site-vitrine-consultation.site-vitrine-consultation': ApiSiteVitrineConsultationSiteVitrineConsultation;
      'api::site-vitrine-declaration-d-accessibilite.site-vitrine-declaration-d-accessibilite': ApiSiteVitrineDeclarationDAccessibiliteSiteVitrineDeclarationDAccessibilite;
      'api::site-vitrine-mentions-legale.site-vitrine-mentions-legale': ApiSiteVitrineMentionsLegaleSiteVitrineMentionsLegale;
      'api::site-vitrine-politique-de-confidentialite.site-vitrine-politique-de-confidentialite': ApiSiteVitrinePolitiqueDeConfidentialiteSiteVitrinePolitiqueDeConfidentialite;
      'api::site-vitrine-question-au-gouvernement.site-vitrine-question-au-gouvernement': ApiSiteVitrineQuestionAuGouvernementSiteVitrineQuestionAuGouvernement;
      'api::thematique.thematique': ApiThematiqueThematique;
      'api::welcome-page-new.welcome-page-new': ApiWelcomePageNewWelcomePageNew;
    }
  }
}
