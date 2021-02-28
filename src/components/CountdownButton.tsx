import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContexts";
import styles from "../styles/components/CountdownButton.module.css";

export function CountdownButton() {
  const {
    totalTime,
    time,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);
  const progressBar = 100 - (time * 100 / totalTime);


  return (
    <>
      {hasFinished ? (
        <div className={styles.progressBar}>
          <button disabled className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
            Ciclo encerrado
            <img src="/icons/check-circle.svg" alt="check-circle-icon"/>
          </button>
          <div style={{ width: "100%" }} />
        </div>
      ) : isActive ? (
        <div className={styles.progressBar}>
          <button
            type="button"
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
              Abandonar ciclo
            <img src="/icons/close.svg" alt="close-icon"/>
          </button>
          <div style={{ width: `${progressBar}%` }} />
        </div>
      ) : (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Iniciar um ciclo
          <img src="/icons/play-arrow.svg" alt="play-icon"/>
        </button>
      )}
    </>
  );
}
