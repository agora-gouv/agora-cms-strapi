import type { Schema, Attribute } from '@strapi/strapi';

export interface ReponseReponseVideo extends Schema.Component {
  collectionName: 'components_video_reponse_videos';
  info: {
    displayName: 'reponseVideo';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    auteurDescription: Attribute.Text & Attribute.Required;
    urlVideo: Attribute.String & Attribute.Required;
    videoWidth: Attribute.Integer & Attribute.Required;
    videoHeight: Attribute.Integer & Attribute.Required;
    transcription: Attribute.Blocks;
    informationAdditionnelleTitre: Attribute.String;
    informationAdditionnelleDescription: Attribute.Text;
  };
}

export interface ReponseReponsetextuelle extends Schema.Component {
  collectionName: 'components_text_reponsetextuelles';
  info: {
    displayName: 'reponseTextuelle';
    icon: 'quote';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'reponse.reponse-video': ReponseReponseVideo;
      'reponse.reponsetextuelle': ReponseReponsetextuelle;
    }
  }
}
