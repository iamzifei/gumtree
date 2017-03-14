import React, { PropTypes } from 'react';
import styles from './App.css';

const ContentBoxHeader = ({ title, clickHandler, isExpanded }) => (
  <div className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    <button
      className={styles.expand}
      role="button"
      aria-pressed={isExpanded}
      aria-label={isExpanded ? 'Collapse content' : 'Expand content'}
      onClick={clickHandler}
    >
      <span className={isExpanded ? styles.close : styles.open} />
    </button>
  </div>
);

ContentBoxHeader.propTypes = {
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export default ContentBoxHeader;
