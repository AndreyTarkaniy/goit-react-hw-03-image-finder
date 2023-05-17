import React from 'react';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  url: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
