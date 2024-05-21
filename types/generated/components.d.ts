import type { Schema, Attribute } from '@strapi/strapi';

export interface ConsultationContenuDeConsultation extends Schema.Component {
  collectionName: 'components_consultation_contenu_de_consultations';
  info: {
    displayName: 'Contenu de consultation';
  };
  attributes: {
    libelle_sur_la_homepage: Attribute.String & Attribute.Required;
    libelle_sur_historique: Attribute.String & Attribute.Required;
    message_partage: Attribute.String & Attribute.Required;
    etape_historique: Attribute.Integer & Attribute.Required;
    libelle_action_historique: Attribute.String & Attribute.Required;
    url_pdf_analyse: Attribute.String & Attribute.Required;
    titre_question_feedback: Attribute.String & Attribute.Required;
    description_question_feedback: Attribute.Blocks & Attribute.Required;
    titre_pied_de_page: Attribute.String & Attribute.Required;
    description_pied_de_page: Attribute.Blocks & Attribute.Required;
    message_information: Attribute.Blocks & Attribute.Required;
  };
}

export interface QuestionDeConsultationChoixConditionnel
  extends Schema.Component {
  collectionName: 'components_question_choix_conditionnels';
  info: {
    displayName: 'Choix conditionnel';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    numero_de_la_question_suivante: Attribute.Integer & Attribute.Required;
  };
}

export interface QuestionDeConsultationChoix extends Schema.Component {
  collectionName: 'components_question_choixes';
  info: {
    displayName: 'choix';
    description: '';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface QuestionDeConsultationDescription extends Schema.Component {
  collectionName: 'components_question_descriptions';
  info: {
    displayName: 'description';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    numero: Attribute.Integer & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface QuestionDeConsultationQuestionAChoixMultiples
  extends Schema.Component {
  collectionName: 'components_question_question_a_choix_multiples';
  info: {
    displayName: 'question \u00E0 choix multiples';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    numero: Attribute.Integer & Attribute.Required;
    choix: Attribute.Component<'question-de-consultation.choix', true> &
      Attribute.Required;
    nombre_maximum_de_choix: Attribute.Integer & Attribute.Required;
  };
}

export interface QuestionDeConsultationQuestionAChoixUnique
  extends Schema.Component {
  collectionName: 'components_question_question_a_choix_uniques';
  info: {
    displayName: 'question \u00E0 choix unique';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    numero: Attribute.Integer & Attribute.Required;
    choix: Attribute.Component<'question-de-consultation.choix', true>;
  };
}

export interface QuestionDeConsultationQuestionConditionnelle
  extends Schema.Component {
  collectionName: 'components_question_question_conditionnelles';
  info: {
    displayName: 'Question conditionnelle';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    numero: Attribute.Integer & Attribute.Required;
    choix: Attribute.Component<
      'question-de-consultation.choix-conditionnel',
      true
    > &
      Attribute.Required;
  };
}

export interface QuestionDeConsultationQuestionOuverte
  extends Schema.Component {
  collectionName: 'components_question_question_ouvertes';
  info: {
    displayName: 'question ouverte';
    description: '';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    numero: Attribute.Integer & Attribute.Required;
  };
}

export interface ReponseQagReponseVideo extends Schema.Component {
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

export interface ReponseQagReponsetextuelle extends Schema.Component {
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
      'consultation.contenu-de-consultation': ConsultationContenuDeConsultation;
      'question-de-consultation.choix-conditionnel': QuestionDeConsultationChoixConditionnel;
      'question-de-consultation.choix': QuestionDeConsultationChoix;
      'question-de-consultation.description': QuestionDeConsultationDescription;
      'question-de-consultation.question-a-choix-multiples': QuestionDeConsultationQuestionAChoixMultiples;
      'question-de-consultation.question-a-choix-unique': QuestionDeConsultationQuestionAChoixUnique;
      'question-de-consultation.question-conditionnelle': QuestionDeConsultationQuestionConditionnelle;
      'question-de-consultation.question-ouverte': QuestionDeConsultationQuestionOuverte;
      'reponse-qag.reponse-video': ReponseQagReponseVideo;
      'reponse-qag.reponsetextuelle': ReponseQagReponsetextuelle;
    }
  }
}
