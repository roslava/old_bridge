import React, { useEffect } from 'react';
import styles from './TextModal.module.css';

const TextModal = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    if (isOpen) {
      // Блокируем прокрутку body
      document.body.style.overflow = "hidden";
      
      // Добавляем обработчик прокрутки на уровне документа
      const preventScrollHandler = (e) => {
          e.preventDefault();
          e.stopPropagation();
      };
      
      document.addEventListener('wheel', preventScrollHandler, { passive: false });
      
      // Очищаем при размонтировании или закрытии
      return () => {
          document.body.style.overflow = "";
          document.removeEventListener('wheel', preventScrollHandler);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div 
      className={styles.backdrop} 
      onClick={handleBackdropClick}
      onWheel={preventScroll}
    >
      <div 
        className={styles.modal}
        onWheel={preventScroll}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          <div className={styles.textContent}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextModal; 