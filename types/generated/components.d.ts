import type { Schema, Struct } from '@strapi/strapi';

export interface ConsultationSectionSectionAccordeon
  extends Struct.ComponentSchema {
  collectionName: 'components_consultation_section_section_accordeons';
  info: {
    displayName: 'Section accord\u00E9on';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ConsultationSectionSectionChiffre
  extends Struct.ComponentSchema {
  collectionName: 'components_consultation_section_section_chiffres';
  info: {
    displayName: 'Section chiffre';
    icon: 'plus';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ConsultationSectionSectionCitation
  extends Struct.ComponentSchema {
  collectionName: 'components_consultation_section_section_citations';
  info: {
    displayName: 'Section citation';
    icon: 'quote';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ConsultationSectionSectionImage
  extends Struct.ComponentSchema {
  collectionName: 'components_consultation_section_section_images';
  info: {
    description: '';
    displayName: 'Section image';
    icon: 'picture';
  };
  attributes: {
    description_accessible_de_l_image: Schema.Attribute.Text &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ConsultationSectionSectionTexteRiche
  extends Struct.ComponentSchema {
  collectionName: 'components_consultation_section_section_texte_riches';
  info: {
    displayName: 'Section texte riche';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ConsultationSectionSectionTitre
  extends Struct.ComponentSchema {
  collectionName: 'components_consultation_section_section_titres';
  info: {
    displayName: 'Section titre';
    icon: 'underline';
  };
  attributes: {
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ConsultationSectionSectionVideo
  extends Struct.ComponentSchema {
  collectionName: 'components_consultation_section_section_videos';
  info: {
    description: '';
    displayName: 'Section vid\u00E9o';
    icon: 'play';
  };
  attributes: {
    date_tournage: Schema.Attribute.Date & Schema.Attribute.Required;
    hauteur: Schema.Attribute.Integer & Schema.Attribute.Required;
    largeur: Schema.Attribute.Integer & Schema.Attribute.Required;
    nom_auteur: Schema.Attribute.String & Schema.Attribute.Required;
    poste_auteur: Schema.Attribute.String & Schema.Attribute.Required;
    transcription: Schema.Attribute.Text & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface QuestionDeConsultationChoix extends Struct.ComponentSchema {
  collectionName: 'components_question_choixes';
  info: {
    description: '';
    displayName: 'choix';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    ouvert: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface QuestionDeConsultationChoixConditionnel
  extends Struct.ComponentSchema {
  collectionName: 'components_question_choix_conditionnels';
  info: {
    description: '';
    displayName: 'Choix conditionnel';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    numero_de_la_question_suivante: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    ouvert: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface QuestionDeConsultationDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_question_descriptions';
  info: {
    description: '';
    displayName: 'description';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    numero: Schema.Attribute.Integer & Schema.Attribute.Required;
    question_suivante: Schema.Attribute.Integer;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
    transcription_image: Schema.Attribute.Text;
    url_image: Schema.Attribute.String;
  };
}

export interface QuestionDeConsultationQuestionAChoixMultiples
  extends Struct.ComponentSchema {
  collectionName: 'components_question_question_a_choix_multiples';
  info: {
    description: '';
    displayName: 'question \u00E0 choix multiples';
  };
  attributes: {
    choix: Schema.Attribute.Component<'question-de-consultation.choix', true> &
      Schema.Attribute.Required;
    nombre_maximum_de_choix: Schema.Attribute.Integer &
      Schema.Attribute.Required;
    numero: Schema.Attribute.Integer & Schema.Attribute.Required;
    popup_explication: Schema.Attribute.Blocks;
    question_suivante: Schema.Attribute.Integer;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuestionDeConsultationQuestionAChoixUnique
  extends Struct.ComponentSchema {
  collectionName: 'components_question_question_a_choix_uniques';
  info: {
    description: '';
    displayName: 'question \u00E0 choix unique';
  };
  attributes: {
    choix: Schema.Attribute.Component<'question-de-consultation.choix', true>;
    numero: Schema.Attribute.Integer & Schema.Attribute.Required;
    popup_explication: Schema.Attribute.Blocks;
    question_suivante: Schema.Attribute.Integer;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuestionDeConsultationQuestionConditionnelle
  extends Struct.ComponentSchema {
  collectionName: 'components_question_question_conditionnelles';
  info: {
    description: '';
    displayName: 'Question conditionnelle';
  };
  attributes: {
    choix: Schema.Attribute.Component<
      'question-de-consultation.choix-conditionnel',
      true
    > &
      Schema.Attribute.Required;
    numero: Schema.Attribute.Integer & Schema.Attribute.Required;
    popup_explication: Schema.Attribute.Blocks;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface QuestionDeConsultationQuestionOuverte
  extends Struct.ComponentSchema {
  collectionName: 'components_question_question_ouvertes';
  info: {
    description: '';
    displayName: 'question ouverte';
  };
  attributes: {
    numero: Schema.Attribute.Integer & Schema.Attribute.Required;
    popup_explication: Schema.Attribute.Blocks;
    question_suivante: Schema.Attribute.Integer;
    titre: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ReponseReponseVideo extends Struct.ComponentSchema {
  collectionName: 'components_video_reponse_videos';
  info: {
    description: '';
    displayName: 'reponseVideo';
    icon: 'monitor';
  };
  attributes: {
    auteurDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    informationAdditionnelleDescription: Schema.Attribute.Blocks;
    informationAdditionnelleTitre: Schema.Attribute.String;
    page_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'R\u00E9ponse du Gouvernement'>;
    transcription: Schema.Attribute.Text & Schema.Attribute.Required;
    urlVideo: Schema.Attribute.String & Schema.Attribute.Required;
    video: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    videoHeight: Schema.Attribute.Integer & Schema.Attribute.Required;
    videoWidth: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ReponseReponsetextuelle extends Struct.ComponentSchema {
  collectionName: 'components_text_reponsetextuelles';
  info: {
    description: '';
    displayName: 'reponseTextuelle';
    icon: 'quote';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'consultation-section.section-accordeon': ConsultationSectionSectionAccordeon;
      'consultation-section.section-chiffre': ConsultationSectionSectionChiffre;
      'consultation-section.section-citation': ConsultationSectionSectionCitation;
      'consultation-section.section-image': ConsultationSectionSectionImage;
      'consultation-section.section-texte-riche': ConsultationSectionSectionTexteRiche;
      'consultation-section.section-titre': ConsultationSectionSectionTitre;
      'consultation-section.section-video': ConsultationSectionSectionVideo;
      'question-de-consultation.choix': QuestionDeConsultationChoix;
      'question-de-consultation.choix-conditionnel': QuestionDeConsultationChoixConditionnel;
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
