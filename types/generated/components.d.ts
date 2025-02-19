import type { Schema, Attribute } from '@strapi/strapi';

export interface ConsultationSectionSectionAccordeon extends Schema.Component {
  collectionName: 'components_consultation_section_section_accordeons';
  info: {
    displayName: 'Section accord\u00E9on';
    icon: 'layer';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ConsultationSectionSectionChiffre extends Schema.Component {
  collectionName: 'components_consultation_section_section_chiffres';
  info: {
    displayName: 'Section chiffre';
    icon: 'plus';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ConsultationSectionSectionCitation extends Schema.Component {
  collectionName: 'components_consultation_section_section_citations';
  info: {
    displayName: 'Section citation';
    icon: 'quote';
  };
  attributes: {
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ConsultationSectionSectionImage extends Schema.Component {
  collectionName: 'components_consultation_section_section_images';
  info: {
    displayName: 'Section image';
    icon: 'picture';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    description_accessible_de_l_image: Attribute.Text & Attribute.Required;
  };
}

export interface ConsultationSectionSectionTexteRiche extends Schema.Component {
  collectionName: 'components_consultation_section_section_texte_riches';
  info: {
    displayName: 'Section texte riche';
    icon: 'file';
  };
  attributes: {
    description: Attribute.Blocks & Attribute.Required;
  };
}

export interface ConsultationSectionSectionTitre extends Schema.Component {
  collectionName: 'components_consultation_section_section_titres';
  info: {
    displayName: 'Section titre';
    icon: 'underline';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
  };
}

export interface ConsultationSectionSectionVideo extends Schema.Component {
  collectionName: 'components_consultation_section_section_videos';
  info: {
    displayName: 'Section vid\u00E9o';
    icon: 'play';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
    largeur: Attribute.Integer & Attribute.Required;
    hauteur: Attribute.Integer & Attribute.Required;
    nom_auteur: Attribute.String & Attribute.Required;
    poste_auteur: Attribute.String & Attribute.Required;
    date_tournage: Attribute.Date & Attribute.Required;
    transcription: Attribute.Text & Attribute.Required;
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
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    numero_de_la_question_suivante: Attribute.Integer & Attribute.Required;
    ouvert: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface QuestionDeConsultationChoix extends Schema.Component {
  collectionName: 'components_question_choixes';
  info: {
    displayName: 'choix';
    description: '';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    ouvert: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
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
    question_suivante: Attribute.Integer;
    url_image: Attribute.String;
    transcription_image: Attribute.Text;
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
    popup_explication: Attribute.Blocks;
    question_suivante: Attribute.Integer;
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
    popup_explication: Attribute.Blocks;
    question_suivante: Attribute.Integer;
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
    popup_explication: Attribute.Blocks;
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
    popup_explication: Attribute.Blocks;
    question_suivante: Attribute.Integer;
  };
}

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
    informationAdditionnelleTitre: Attribute.String;
    transcription: Attribute.Text & Attribute.Required;
    informationAdditionnelleDescription: Attribute.Blocks;
    page_title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'R\u00E9ponse du Gouvernement'>;
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
    text: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'consultation-section.section-accordeon': ConsultationSectionSectionAccordeon;
      'consultation-section.section-chiffre': ConsultationSectionSectionChiffre;
      'consultation-section.section-citation': ConsultationSectionSectionCitation;
      'consultation-section.section-image': ConsultationSectionSectionImage;
      'consultation-section.section-texte-riche': ConsultationSectionSectionTexteRiche;
      'consultation-section.section-titre': ConsultationSectionSectionTitre;
      'consultation-section.section-video': ConsultationSectionSectionVideo;
      'question-de-consultation.choix-conditionnel': QuestionDeConsultationChoixConditionnel;
      'question-de-consultation.choix': QuestionDeConsultationChoix;
      'question-de-consultation.description': QuestionDeConsultationDescription;
      'question-de-consultation.question-a-choix-multiples': QuestionDeConsultationQuestionAChoixMultiples;
      'question-de-consultation.question-a-choix-unique': QuestionDeConsultationQuestionAChoixUnique;
      'question-de-consultation.question-conditionnelle': QuestionDeConsultationQuestionConditionnelle;
      'question-de-consultation.question-ouverte': QuestionDeConsultationQuestionOuverte;
      'reponse.reponse-video': ReponseReponseVideo;
      'reponse.reponsetextuelle': ReponseReponsetextuelle;
    }
  }
}
