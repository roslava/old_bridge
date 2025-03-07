import styles from '@/components/Timeline/Timeline.module.css';
import { useState, useEffect } from "react";

const TimeLine = ({ onSegmentClick }) => {
    const [isTimeLineOpen, setIsOpenTimeLine] = useState(true);
    const [isTextVisible, setIsTextVisible] = useState(false); // Состояние для видимости текста

    // Обработчик клика на сегмент
    const handleClick = (segment) => {
        if (onSegmentClick) {
            onSegmentClick(segment);
        }
    };

    // Эффект для задержки отображения текста
    useEffect(() => {
        let timeoutId;
        if (isTimeLineOpen) {
            // Устанавливаем задержку в 500 мс перед отображением текста
            timeoutId = setTimeout(() => {
                setIsTextVisible(true);
            }, 500);
        } else {
            // Сбрасываем видимость текста, если timeline закрывается
            setIsTextVisible(false);
        }

        // Очистка таймера при размонтировании или изменении isTimeLineOpen
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [isTimeLineOpen]);

    return (
        <div
            onMouseEnter={() => setIsOpenTimeLine(true)}
            onMouseLeave={() => setIsOpenTimeLine(false)}
            id="timeLine"
            className={`${styles.timeLine} ${isTimeLineOpen ? styles.timeLineOpen : styles.timeLineClose}`}
        >
            <div className={styles.segment} data-segment="A" onClick={() => handleClick('A')}>
                {isTextVisible && (
                    <div className={`${styles.timeLineSegment} font-medium`}>Задумка</div>
                )}
            </div>
            <div className={styles.segment} data-segment="B" onClick={() => handleClick('B')}>
                {isTextVisible && (
                    <div className={`${styles.timeLineSegment} font-medium`}>Строительство</div>
                )}
            </div>
            <div className={styles.segment} data-segment="C" onClick={() => handleClick('C')}>
                {isTextVisible && (
                    <div className={`${styles.timeLineSegment} font-medium`}>Эксплуатация</div>
                )}
            </div>
            <div className={styles.segment} data-segment="D" onClick={() => handleClick('D')}>
                {isTextVisible && (
                    <div className={`${styles.timeLineSegment} font-medium`}>Разрушение</div>
                )}
            </div>
            <div className={styles.segment} data-segment="E" onClick={() => handleClick('E')}>
                {isTextVisible && (
                    <div className={`${styles.timeLineSegment} font-medium`}>Современность</div>
                )}
            </div>
        </div>
    );
};

export default TimeLine;