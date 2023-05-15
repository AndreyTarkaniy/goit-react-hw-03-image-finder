import React from 'react';
import css from 'components/button/button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};
