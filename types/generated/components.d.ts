import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
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

export interface HeroWithImageHeroWithImage extends Schema.Component {
  collectionName: 'components_hero_with_image_hero_with_images';
  info: {
    displayName: 'HeroWithImage';
    description: '';
  };
  attributes: {
    h1: Attribute.String;
    paragraph: Attribute.Text;
    Button: Attribute.Component<'button.button', true>;
  };
}

export interface MetaDataMetaData extends Schema.Component {
  collectionName: 'components_meta_data_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    ogImage: Attribute.Media;
    twitterImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'hero-with-image.hero-with-image': HeroWithImageHeroWithImage;
      'meta-data.meta-data': MetaDataMetaData;
    }
  }
}
