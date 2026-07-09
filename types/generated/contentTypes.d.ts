import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
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
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    adminPermissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::permission'
    >;
    adminUserOwner: Schema.Attribute.Relation<'manyToOne', 'admin::user'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    kind: Schema.Attribute.Enumeration<['content-api', 'admin']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'content-api'>;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
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
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
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
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    apiToken: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
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
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
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
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
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
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
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
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
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
    apiTokens: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiCharteParticipationCharteParticipation
  extends Struct.CollectionTypeSchema {
  collectionName: 'charte_participations';
  info: {
    description: '';
    displayName: 'Charte participation';
    pluralName: 'charte-participations';
    singularName: 'charte-participation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    charte: Schema.Attribute.Blocks & Schema.Attribute.Required;
    charte_preview: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datetime_debut: Schema.Attribute.DateTime & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::charte-participation.charte-participation'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiClusterSemaineLibreClusterSemaineLibre
  extends Struct.CollectionTypeSchema {
  collectionName: 'cluster_semaine_libres';
  info: {
    displayName: 'cluster_semaine_libre';
    pluralName: 'cluster-semaine-libres';
    singularName: 'cluster-semaine-libre';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    keywords: Schema.Attribute.Text & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::cluster-semaine-libre.cluster-semaine-libre'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConcertationConcertation
  extends Struct.CollectionTypeSchema {
  collectionName: 'concertations';
  info: {
    description: '';
    displayName: 'Concertation';
    pluralName: 'concertations';
    singularName: 'concertation';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datetime_publication: Schema.Attribute.DateTime & Schema.Attribute.Required;
    flamme_label: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image_url: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::concertation.concertation'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    thematique: Schema.Attribute.Relation<
      'oneToOne',
      'api::thematique.thematique'
    >;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ApiConsultationApresReponseOuTermineeConsultationApresReponseOuTerminee
  extends Struct.CollectionTypeSchema {
  collectionName: 'consultation_apres_reponse_ou_terminees';
  info: {
    description: '';
    displayName: '3 Consultation - Pour aller plus loin';
    pluralName: 'consultation-apres-reponse-ou-terminees';
    singularName: 'consultation-apres-reponse-ou-terminee';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    feedback_message: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u00CAtes-vous satisfait(e) de cette consultation ?'>;
    historique_call_to_action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Consulter toutes les r\u00E9ponses'>;
    historique_titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Fin de consultation'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation-apres-reponse-ou-terminee.consultation-apres-reponse-ou-terminee'
    > &
      Schema.Attribute.Private;
    nom_strapi: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video',
        'consultation-section.section-accordeon',
      ]
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'fin-de-la-consultation'>;
    template_partage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Comme moi, tu peux participer \u00E0 la Consultation\u00A0: {title} {url}'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConsultationAvantReponseConsultationAvantReponse
  extends Struct.CollectionTypeSchema {
  collectionName: 'consultations_avant_reponse';
  info: {
    description: '';
    displayName: '2 Consultation - Pr\u00E9sentation';
    pluralName: 'consultations-avant-reponse';
    singularName: 'consultation-avant-reponse';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    axe_gouvernemental: Schema.Attribute.Blocks & Schema.Attribute.Required;
    commanditaire: Schema.Attribute.Blocks & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    historique_call_to_action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Voir les objectifs'>;
    historique_titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Lancement'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation-avant-reponse.consultation-avant-reponse'
    > &
      Schema.Attribute.Private;
    nom_strapi: Schema.Attribute.String & Schema.Attribute.Required;
    objectif: Schema.Attribute.Blocks & Schema.Attribute.Required;
    presentation: Schema.Attribute.Blocks & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    sections: Schema.Attribute.DynamicZone<
      [
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video',
        'consultation-section.section-accordeon',
      ]
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'lancement'>;
    template_partage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Comme moi, tu peux participer \u00E0 la Consultation\u00A0: {title} {url}'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConsultationContenuAVenirConsultationContenuAVenir
  extends Struct.CollectionTypeSchema {
  collectionName: 'consultation_contenus_a_venir';
  info: {
    displayName: '7 Consultation - \u00C0 venir';
    pluralName: 'consultation-contenus-a-venir';
    singularName: 'consultation-contenu-a-venir';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation-contenu-a-venir.consultation-contenu-a-venir'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    titre_historique: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConsultationContenuAnalyseDesReponseConsultationContenuAnalyseDesReponse
  extends Struct.CollectionTypeSchema {
  collectionName: 'consultation_contenu_analyse_des_reponses';
  info: {
    description: '';
    displayName: '4 Consultation - Analyse des r\u00E9ponses';
    pluralName: 'consultation-contenu-analyse-des-reponses';
    singularName: 'consultation-contenu-analyse-des-reponse';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datetime_publication: Schema.Attribute.DateTime & Schema.Attribute.Required;
    feedback_message: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<"\u00CAtes-vous satisfait(e) de l'analyse de cette consultation ?">;
    flamme_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 26;
      }>;
    historique_call_to_action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Consulter la synth\u00E8se'>;
    historique_titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Analyse des r\u00E9ponses'>;
    lien_telechargement_analyse: Schema.Attribute.String &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation-contenu-analyse-des-reponse.consultation-contenu-analyse-des-reponse'
    > &
      Schema.Attribute.Private;
    nom_strapi: Schema.Attribute.String & Schema.Attribute.Required;
    pdf_analyse: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    recap_emoji: Schema.Attribute.String;
    recap_label: Schema.Attribute.String;
    sections: Schema.Attribute.DynamicZone<
      [
        'consultation-section.section-accordeon',
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video',
      ]
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'analyse-disponible'>;
    template_partage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cela peut t\u2019int\u00E9resser : l\u2019analyse des r\u00E9ponses de la consultation {title} {url}'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConsultationContenuAutreConsultationContenuAutre
  extends Struct.CollectionTypeSchema {
  collectionName: 'consultations_contenu_autre';
  info: {
    description: '';
    displayName: '6 Consultation - Autre';
    pluralName: 'consultations-contenu-autre';
    singularName: 'consultation-contenu-autre';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datetime_publication: Schema.Attribute.DateTime & Schema.Attribute.Required;
    feedback_message: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u00CAtes-vous satisfait(e) de cette consultation ?'>;
    flamme_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 26;
      }>;
    historique_call_to_action: Schema.Attribute.String &
      Schema.Attribute.Required;
    historique_titre: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation-contenu-autre.consultation-contenu-autre'
    > &
      Schema.Attribute.Private;
    nom_strapi: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    recap_emoji: Schema.Attribute.String;
    recap_label: Schema.Attribute.String;
    sections: Schema.Attribute.DynamicZone<
      [
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video',
        'consultation-section.section-accordeon',
      ]
    >;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    template_partage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cela peut t\u2019int\u00E9resser : l\u2019analyse des r\u00E9ponses de la consultation {title} {url}'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConsultationContenuReponseDuCommanditaireConsultationContenuReponseDuCommanditaire
  extends Struct.CollectionTypeSchema {
  collectionName: 'contenu_reponse_du_commanditaires';
  info: {
    description: '';
    displayName: '5 Consultation - R\u00E9ponse du commanditaire';
    pluralName: 'consultation-contenu-reponse-du-commanditaires';
    singularName: 'consultation-contenu-reponse-du-commanditaire';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datetime_publication: Schema.Attribute.DateTime & Schema.Attribute.Required;
    feedback_message: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u00CAtes-vous satisfait(e) de la r\u00E9ponse de la ministre ?'>;
    flamme_label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 26;
      }>;
    historique_call_to_action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Actions mises en place'>;
    historique_titre: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'R\u00E9ponse du Gouvernement'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation-contenu-reponse-du-commanditaire.consultation-contenu-reponse-du-commanditaire'
    > &
      Schema.Attribute.Private;
    nom_strapi: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    recap_emoji: Schema.Attribute.String;
    recap_label: Schema.Attribute.String;
    sections: Schema.Attribute.DynamicZone<
      [
        'consultation-section.section-accordeon',
        'consultation-section.section-chiffre',
        'consultation-section.section-citation',
        'consultation-section.section-image',
        'consultation-section.section-texte-riche',
        'consultation-section.section-titre',
        'consultation-section.section-video',
      ]
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'reponse-du-gouvernement'>;
    template_partage: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Cela peut t\u2019int\u00E9resser : la r\u00E9ponse du gouvernement sur la consultation {title} {url}'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiConsultationConsultation
  extends Struct.CollectionTypeSchema {
  collectionName: 'consultations';
  info: {
    description: '';
    displayName: '1 Consultation - Squelette';
    pluralName: 'consultations';
    singularName: 'consultation';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    consultation_apres_reponse_ou_terminee: Schema.Attribute.Relation<
      'oneToOne',
      'api::consultation-apres-reponse-ou-terminee.consultation-apres-reponse-ou-terminee'
    >;
    consultation_avant_reponse: Schema.Attribute.Relation<
      'oneToOne',
      'api::consultation-avant-reponse.consultation-avant-reponse'
    >;
    consultation_contenu_a_venir: Schema.Attribute.Relation<
      'oneToOne',
      'api::consultation-contenu-a-venir.consultation-contenu-a-venir'
    >;
    consultation_contenu_analyse_des_reponse: Schema.Attribute.Relation<
      'oneToOne',
      'api::consultation-contenu-analyse-des-reponse.consultation-contenu-analyse-des-reponse'
    >;
    consultation_contenu_autres: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation-contenu-autre.consultation-contenu-autre'
    >;
    contenu_reponse_du_commanditaires: Schema.Attribute.Relation<
      'oneToOne',
      'api::consultation-contenu-reponse-du-commanditaire.consultation-contenu-reponse-du-commanditaire'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datetime_de_debut: Schema.Attribute.DateTime & Schema.Attribute.Required;
    datetime_de_fin: Schema.Attribute.DateTime & Schema.Attribute.Required;
    estimation_nombre_de_questions: Schema.Attribute.String &
      Schema.Attribute.Required;
    estimation_temps: Schema.Attribute.String & Schema.Attribute.Required;
    image_de_couverture: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    image_page_de_contenu: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::consultation.consultation'
    > &
      Schema.Attribute.Private;
    nombre_de_questions: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    nombre_participants_cible: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    questions: Schema.Attribute.DynamicZone<
      [
        'question-de-consultation.description',
        'question-de-consultation.question-a-choix-multiples',
        'question-de-consultation.question-a-choix-unique',
        'question-de-consultation.question-conditionnelle',
        'question-de-consultation.question-ouverte',
      ]
    > &
      Schema.Attribute.Required;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    sous_titre_page_web: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'lanc\u00E9e par le Gouvernement'>;
    territoire: Schema.Attribute.Enumeration<
      [
        'France',
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
        'Yvelines',
      ]
    > &
      Schema.Attribute.Required;
    thematique: Schema.Attribute.Relation<
      'oneToOne',
      'api::thematique.thematique'
    >;
    titre_consultation: Schema.Attribute.String & Schema.Attribute.Required;
    titre_page_web: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Grande consultation citoyenne'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url_image_de_couverture: Schema.Attribute.String &
      Schema.Attribute.Required;
    url_image_page_de_contenu: Schema.Attribute.String &
      Schema.Attribute.Required;
  };
}

export interface ApiFicheInventaireFicheInventaire
  extends Struct.CollectionTypeSchema {
  collectionName: 'fiche_inventaires';
  info: {
    description: '';
    displayName: 'Fiche Inventaire';
    pluralName: 'fiche-inventaires';
    singularName: 'fiche-inventaire';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    annee_de_lancement: Schema.Attribute.String & Schema.Attribute.Required;
    condition_participation: Schema.Attribute.Enumeration<
      ['Ouvert \u00E0 tous', 'Tirage au sort repr\u00E9sentatif']
    > &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    debut: Schema.Attribute.Date & Schema.Attribute.Required;
    etape: Schema.Attribute.Enumeration<
      [
        '\u00C0 venir',
        'En cours',
        'R\u00E9sultats \u00E0 venir',
        'R\u00E9sultats disponibles',
        'Actions',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u00C0 venir'>;
    etape_1_lancement: Schema.Attribute.Blocks & Schema.Attribute.Required;
    etape_2_analyse: Schema.Attribute.Blocks;
    etape_3_suivi: Schema.Attribute.Blocks;
    fin: Schema.Attribute.Date & Schema.Attribute.Required;
    illustration: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    lien_site: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::fiche-inventaire.fiche-inventaire'
    > &
      Schema.Attribute.Private;
    modalite_participation: Schema.Attribute.Enumeration<
      ['En ligne', 'En pr\u00E9sentiel']
    > &
      Schema.Attribute.Required;
    porteur: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    thematique: Schema.Attribute.Relation<
      'oneToOne',
      'api::thematique.thematique'
    >;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['Consultation', 'Concertation', 'Convention citoyenne']
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPagePoserMaQuestionPagePoserMaQuestion
  extends Struct.SingleTypeSchema {
  collectionName: 'page_poser_ma_questions';
  info: {
    displayName: 'Page poser ma question';
    pluralName: 'page-poser-ma-questions';
    singularName: 'page-poser-ma-question';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-poser-ma-question.page-poser-ma-question'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    texte_regles: Schema.Attribute.Blocks & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageQuestionsAuGouvernementPageQuestionsAuGouvernement
  extends Struct.SingleTypeSchema {
  collectionName: 'page_questions_au_gouvernements';
  info: {
    description: '';
    displayName: 'Page questions au gouvernement';
    pluralName: 'page-questions-au-gouvernements';
    singularName: 'page-questions-au-gouvernement';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    comment_ca_marche: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    information_bottomsheet: Schema.Attribute.Text & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-questions-au-gouvernement.page-questions-au-gouvernement'
    > &
      Schema.Attribute.Private;
    nombre_de_questions: Schema.Attribute.String & Schema.Attribute.Required;
    programme_du_mois: Schema.Attribute.Blocks;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPageReponseAuxQuestionsAuGouvernementPageReponseAuxQuestionsAuGouvernement
  extends Struct.SingleTypeSchema {
  collectionName: 'page_reponse_aux_questions_au_gouvernements';
  info: {
    description: '';
    displayName: 'Page r\u00E9ponse aux questions au gouvernement';
    pluralName: 'page-reponse-aux-questions-au-gouvernements';
    singularName: 'page-reponse-aux-questions-au-gouvernement';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    information_reponse_a_venir_bottomsheet: Schema.Attribute.Text &
      Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::page-reponse-aux-questions-au-gouvernement.page-reponse-aux-questions-au-gouvernement'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiQaGHeadersOngletQaGHeadersOnglet
  extends Struct.CollectionTypeSchema {
  collectionName: 'qa_g_headers_onglets';
  info: {
    displayName: 'QaG - Headers onglet';
    pluralName: 'qa-g-headers-onglets';
    singularName: 'qa-g-headers-onglet';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    datetime_publication: Schema.Attribute.DateTime & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::qa-g-headers-onglet.qa-g-headers-onglet'
    > &
      Schema.Attribute.Private;
    message: Schema.Attribute.Text & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<
      ['top', 'supporting', 'trending', 'latest']
    > &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReponseDuGouvernementReponseDuGouvernement
  extends Struct.CollectionTypeSchema {
  collectionName: 'reponse_du_gouvernements';
  info: {
    description: '';
    displayName: 'R\u00E9ponse du gouvernement';
    pluralName: 'reponse-du-gouvernements';
    singularName: 'reponse-du-gouvernement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    auteur: Schema.Attribute.String & Schema.Attribute.Required;
    auteurFonction: Schema.Attribute.String;
    auteurPortrait: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    auteurPortraitUrl: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    feedbackQuestion: Schema.Attribute.Text & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::reponse-du-gouvernement.reponse-du-gouvernement'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    questionId: Schema.Attribute.String & Schema.Attribute.Required;
    reponseDate: Schema.Attribute.Date & Schema.Attribute.Required;
    reponseType: Schema.Attribute.DynamicZone<
      ['reponse.reponse-video', 'reponse.reponsetextuelle']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 1;
          min: 1;
        },
        number
      >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteVitrineAccueilSiteVitrineAccueil
  extends Struct.SingleTypeSchema {
  collectionName: 'site_vitrine_accueils';
  info: {
    displayName: 'Site vitrine - accueil';
    pluralName: 'site-vitrine-accueils';
    singularName: 'site-vitrine-accueil';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description_body: Schema.Attribute.Text & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-vitrine-accueil.site-vitrine-accueil'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sous_titre_header: Schema.Attribute.String & Schema.Attribute.Required;
    texte_image_1: Schema.Attribute.Blocks & Schema.Attribute.Required;
    texte_image_2: Schema.Attribute.Blocks & Schema.Attribute.Required;
    texte_image_3: Schema.Attribute.Blocks & Schema.Attribute.Required;
    titre_body: Schema.Attribute.String & Schema.Attribute.Required;
    titre_header: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteVitrineConditionsGeneralesDUtilisationSiteVitrineConditionsGeneralesDUtilisation
  extends Struct.SingleTypeSchema {
  collectionName: 'site_vitrine_conditions_generales_d_utilisations';
  info: {
    description: '';
    displayName: "Site vitrine - Conditions g\u00E9n\u00E9rales d'utilisation";
    pluralName: 'site-vitrine-conditions-generales-d-utilisations';
    singularName: 'site-vitrine-conditions-generales-d-utilisation';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    conditions_generales_d_utilisation: Schema.Attribute.Blocks &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-vitrine-conditions-generales-d-utilisation.site-vitrine-conditions-generales-d-utilisation'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteVitrineConsultationSiteVitrineConsultation
  extends Struct.SingleTypeSchema {
  collectionName: 'site_vitrine_consultations';
  info: {
    displayName: 'Site vitrine - Consultation';
    pluralName: 'site-vitrine-consultations';
    singularName: 'site-vitrine-consultation';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    donnez_votre_avis: Schema.Attribute.Blocks & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-vitrine-consultation.site-vitrine-consultation'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteVitrineDeclarationDAccessibiliteSiteVitrineDeclarationDAccessibilite
  extends Struct.SingleTypeSchema {
  collectionName: 'site_vitrine_declaration_d_accessibilites';
  info: {
    displayName: "Site vitrine - D\u00E9claration d'accessibilit\u00E9";
    pluralName: 'site-vitrine-declaration-d-accessibilites';
    singularName: 'site-vitrine-declaration-d-accessibilite';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    declaration: Schema.Attribute.Blocks & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-vitrine-declaration-d-accessibilite.site-vitrine-declaration-d-accessibilite'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteVitrineMentionsLegaleSiteVitrineMentionsLegale
  extends Struct.SingleTypeSchema {
  collectionName: 'site_vitrine_mentions_legales';
  info: {
    displayName: 'Site vitrine - Mentions l\u00E9gales';
    pluralName: 'site-vitrine-mentions-legales';
    singularName: 'site-vitrine-mentions-legale';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-vitrine-mentions-legale.site-vitrine-mentions-legale'
    > &
      Schema.Attribute.Private;
    mentions_legales: Schema.Attribute.Blocks & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteVitrinePolitiqueDeConfidentialiteSiteVitrinePolitiqueDeConfidentialite
  extends Struct.SingleTypeSchema {
  collectionName: 'site_vitrine_politique_de_confidentialites';
  info: {
    displayName: 'Site vitrine - Politique de confidentialit\u00E9';
    pluralName: 'site-vitrine-politique-de-confidentialites';
    singularName: 'site-vitrine-politique-de-confidentialite';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-vitrine-politique-de-confidentialite.site-vitrine-politique-de-confidentialite'
    > &
      Schema.Attribute.Private;
    politique_de_confidentialite: Schema.Attribute.Blocks &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSiteVitrineQuestionAuGouvernementSiteVitrineQuestionAuGouvernement
  extends Struct.SingleTypeSchema {
  collectionName: 'site_vitrine_question_au_gouvernements';
  info: {
    description: '';
    displayName: 'Site vitrine - Question au gouvernement';
    pluralName: 'site-vitrine-question-au-gouvernements';
    singularName: 'site-vitrine-question-au-gouvernement';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::site-vitrine-question-au-gouvernement.site-vitrine-question-au-gouvernement'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sous_titre: Schema.Attribute.String & Schema.Attribute.Required;
    texte_soutien: Schema.Attribute.Blocks & Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiThematiqueThematique extends Struct.CollectionTypeSchema {
  collectionName: 'thematiques';
  info: {
    description: '';
    displayName: 'Th\u00E9matique';
    pluralName: 'thematiques';
    singularName: 'thematique';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    id_base_de_donnees: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::thematique.thematique'
    > &
      Schema.Attribute.Private;
    pictogramme: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiThemeHebdoThemeHebdo extends Struct.CollectionTypeSchema {
  collectionName: 'theme_hebdos';
  info: {
    description: '';
    displayName: 'theme_hebdo';
    pluralName: 'theme-hebdos';
    singularName: 'theme-hebdo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date_debut: Schema.Attribute.DateTime & Schema.Attribute.Required;
    date_fin: Schema.Attribute.DateTime & Schema.Attribute.Required;
    est_theme_libre: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    fonction: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::theme-hebdo.theme-hebdo'
    > &
      Schema.Attribute.Private;
    nom_ministre: Schema.Attribute.String;
    periode: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'>;
    publishedAt: Schema.Attribute.DateTime;
    theme: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiWelcomePageNewWelcomePageNew
  extends Struct.CollectionTypeSchema {
  collectionName: 'welcome_page_news';
  info: {
    description: '';
    displayName: 'Welcome page - News';
    pluralName: 'welcome-page-news';
    singularName: 'welcome-page-new';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    call_to_action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    date_de_debut: Schema.Attribute.DateTime & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::welcome-page-new.welcome-page-new'
    > &
      Schema.Attribute.Private;
    message: Schema.Attribute.Blocks & Schema.Attribute.Required;
    page_route_argument_mobile: Schema.Attribute.String;
    page_route_mobile_enum: Schema.Attribute.Enumeration<
      [
        '/consultationsPage',
        '/qagsPage',
        '/consultation/dynamic',
        '/qagDetailsPage',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/consultationsPage'>;
    publishedAt: Schema.Attribute.DateTime;
    short_message: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
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
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
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
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
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
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
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
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
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
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
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
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
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
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
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
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
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
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::charte-participation.charte-participation': ApiCharteParticipationCharteParticipation;
      'api::cluster-semaine-libre.cluster-semaine-libre': ApiClusterSemaineLibreClusterSemaineLibre;
      'api::concertation.concertation': ApiConcertationConcertation;
      'api::consultation-apres-reponse-ou-terminee.consultation-apres-reponse-ou-terminee': ApiConsultationApresReponseOuTermineeConsultationApresReponseOuTerminee;
      'api::consultation-avant-reponse.consultation-avant-reponse': ApiConsultationAvantReponseConsultationAvantReponse;
      'api::consultation-contenu-a-venir.consultation-contenu-a-venir': ApiConsultationContenuAVenirConsultationContenuAVenir;
      'api::consultation-contenu-analyse-des-reponse.consultation-contenu-analyse-des-reponse': ApiConsultationContenuAnalyseDesReponseConsultationContenuAnalyseDesReponse;
      'api::consultation-contenu-autre.consultation-contenu-autre': ApiConsultationContenuAutreConsultationContenuAutre;
      'api::consultation-contenu-reponse-du-commanditaire.consultation-contenu-reponse-du-commanditaire': ApiConsultationContenuReponseDuCommanditaireConsultationContenuReponseDuCommanditaire;
      'api::consultation.consultation': ApiConsultationConsultation;
      'api::fiche-inventaire.fiche-inventaire': ApiFicheInventaireFicheInventaire;
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
      'api::theme-hebdo.theme-hebdo': ApiThemeHebdoThemeHebdo;
      'api::welcome-page-new.welcome-page-new': ApiWelcomePageNewWelcomePageNew;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
