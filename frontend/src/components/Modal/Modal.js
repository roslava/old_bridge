import React from 'react';
import Image from 'next/image';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children, type, content, imageCaption }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          {type === 'text' && (
            <div className={styles.textContent}>
              {content}
            </div>
          )}
          {type === 'image' && (
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={content}
                  alt={imageCaption || ''}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
              {imageCaption && <p className={styles.imageCaption}>{imageCaption}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal; 