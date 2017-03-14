import React, { PropTypes } from 'react';
import styles from './App.css';

const ContentBoxFooter = ({ handleNextClick, handlePrevClick, nextTitle }) => (
  <div className={styles.footer}>

    <button
      onClick={handlePrevClick}
      role="button"
      aria-label="Previous panel"
      className={styles.button}
    >
      <span className={styles.prev} />
      <span className={styles.button_text}>Prev</span>
    </button>

    <button
      onClick={handleNextClick}
      role="button"
      aria-label={nextTitle}
      className={styles.button}
    >
      <span className={styles.button_text}>{nextTitle}</span>
      <span className={styles.next} />
    </button>

  </div>
);

ContentBoxFooter.propTypes = {
  handleNextClick: PropTypes.func.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  nextTitle: PropTypes.string.isRequired,
};

export default ContentBoxFooter;
