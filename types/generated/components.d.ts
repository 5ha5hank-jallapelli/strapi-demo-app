import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<
      [
        'btn--primary',
        'btn--secondary',
        'button-link--primary',
        'button-link--secondary'
      ]
    >;
    open_new_tab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface CallToActionCta extends Schema.Component {
  collectionName: 'components_call_to_action_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    title: Attribute.String;
    buttons: Attribute.Component<'button.button', true>;
    paragraph: Attribute.Text;
  };
}

export interface CardsGroupCards extends Schema.Component {
  collectionName: 'components_cards_group_cards';
  info: {
    displayName: 'Cards';
    description: '';
  };
  attributes: {
    cards: Attribute.Component<'cards.card', true>;
  };
}

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    paragraph: Attribute.String;
  };
}

export interface HeroSectionsHeroWithImage extends Schema.Component {
  collectionName: 'components_hero_sections_hero_with_images';
  info: {
    displayName: 'HeroWithImage';
    description: '';
  };
  attributes: {
    h1: Attribute.String;
    paragraph: Attribute.Text;
    heroImage: Attribute.Media;
    buttons: Attribute.Component<'button.button', true>;
    subheader: Attribute.String;
  };
}

export interface MetadataMetaData extends Schema.Component {
  collectionName: 'components_meta_data_meta_data';
  info: {
    displayName: 'Meta Data';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    ogImage: Attribute.Media;
    twitterImage: Attribute.Media;
    keywords: Attribute.String;
  };
}

export interface WindowsAppCatalogDiscover extends Schema.Component {
  collectionName: 'components_windows_app_catalog_discovers';
  info: {
    displayName: 'Discover';
    description: '';
  };
  attributes: {
    h2: Attribute.String;
    features: Attribute.Component<'cards.card', true>;
  };
}

export interface WindowsAppCatalogEmpoweringAdmins extends Schema.Component {
  collectionName: 'components_windows_app_catalog_empowering_admins';
  info: {
    displayName: 'empoweringAdmins';
    description: '';
  };
  attributes: {
    features: Attribute.Component<'cards.card', true>;
    h2: Attribute.String;
    paragraph: Attribute.Text;
  };
}

export interface WindowsAppCatalogSimplifyAppManagement
  extends Schema.Component {
  collectionName: 'components_windows_app_catalog_simplify_app_managements';
  info: {
    displayName: 'SimplifyAppManagement';
  };
  attributes: {
    h2: Attribute.String;
    paragraph: Attribute.Text;
  };
}

export interface WindowsAppCatalogVarietyOfApps extends Schema.Component {
  collectionName: 'components_windows_app_catalog_variety_of_apps';
  info: {
    displayName: 'VarietyOfApps';
  };
  attributes: {
    h2: Attribute.String;
    paragraph: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'call-to-action.cta': CallToActionCta;
      'cards-group.cards': CardsGroupCards;
      'cards.card': CardsCard;
      'hero-sections.hero-with-image': HeroSectionsHeroWithImage;
      'metadata.meta-data': MetadataMetaData;
      'windows-app-catalog.discover': WindowsAppCatalogDiscover;
      'windows-app-catalog.empowering-admins': WindowsAppCatalogEmpoweringAdmins;
      'windows-app-catalog.simplify-app-management': WindowsAppCatalogSimplifyAppManagement;
      'windows-app-catalog.variety-of-apps': WindowsAppCatalogVarietyOfApps;
    }
  }
}
