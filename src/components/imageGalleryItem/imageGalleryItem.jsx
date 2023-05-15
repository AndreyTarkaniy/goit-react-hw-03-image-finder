import React from 'react';
import css from 'components/imageGalleryItem/imageGalleryItem.module.css';

export const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, tags }) => (
    <li className={css.imageGalleryItem} key={id}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  ));
};
