import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContexts";
import styles from "../styles/components/Countdown.module.css";


export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown} = useContext(CountdownContext)

  //padStart se a string n tiver 2 caracteres ele vai preencher o restante a esquerda com 0
  // Não foi colocado no contexto pq aqui formata o minuto e o segundo para mostrar de uma maneira diferente, já que quem exige essa mudança é o layout e não a regra de negocio
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <div>
        {hasFinished ? (
          <button disabled className={styles.countdownButton}>
            Ciclo encerrado
          </button>
        ) : (
          <>
            {isActive ? (
              <button
                type="button"
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                onClick={resetCountdown}
              >
                Abandonar ciclo
              </button>
            ) : (
              <button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
              >
                Iniciar um ciclo
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
