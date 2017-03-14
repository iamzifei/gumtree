import React, { PropTypes } from 'react';
import styles from './App.css';

const ContentBoxBody = ({ title, thumbnail, description }) => (
  <div className={styles.panel}>
    { thumbnail ? (
      <div className={styles.thumbnail}>
        <img src={`/image/${thumbnail}`} alt={title} className={styles.img} />
      </div>
    ) : null}
    <p
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);

ContentBoxBody.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
};

ContentBoxBody.defaultProps = {
  thumbnail: 'ipad-mini.jpg',
};

export default ContentBoxBody;
