import React from 'react';
import css from 'components/imageGallery/imageGallery.module.css';

export const ImageGallery = ({ children }) => {
  return <ul className={css.imageGallery}>{children}</ul>;
};
