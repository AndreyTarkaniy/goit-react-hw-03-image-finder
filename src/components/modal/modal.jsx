import React from 'react';
import css from 'components/modal/modal.module.css';

export const Modal = ({ url: { largeImageURL, tags }, onClick }) => {
  return (
    <div className={css.overlay} onClick={onClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};
