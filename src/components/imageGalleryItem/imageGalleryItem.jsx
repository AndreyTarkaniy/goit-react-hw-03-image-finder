import React from 'react';
import css from 'components/imageGalleryItem/imageGalleryItem.module.css';

export const ImageGalleryItem = ({ images, onSelect }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li className={css.imageGalleryItem} key={id}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onSelect({ largeImageURL });
        }}
      />
    </li>
  ));
};
